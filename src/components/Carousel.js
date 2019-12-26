import React, { Component } from 'react';
import {
    Image,
    View,
    ScrollView,
    StyleSheet,
    PanResponder,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';

const reactNativePackage = require('react-native/package.json');
const splitVersion = reactNativePackage.version.split('.');
const majorVersion = +splitVersion[0];
const minorVersion = +splitVersion[1];

const { width, height } = Dimensions.get('window');

export default class Slideshow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            position: 0,
            height: Dimensions.get('window').height,
            width: Dimensions.get('window').width,
            scrolling: false,
            interval: null,
            dataSource: [
                {
                    url: require('../assets/images/home_bg1.png'),
                }, {
                    url: require('../assets/images/home_bg2.jpg'),
                }, {
                    url: require('../assets/images/home_bg3.jpg'),
                },
            ],
        };
    }

    _onRef(ref) {
        this._ref = ref;
        if (ref && this.state.position !== this._getPosition()) {
            this._move(this._getPosition());
        }
    }

    _move(index) {
        const isUpdating = index !== this._getPosition();
        const x = this.state.width * index;
        if (majorVersion === 0 && minorVersion <= 19) {
            this._ref.scrollTo(0, x, true); // use old syntax
        } else {
            this._ref.scrollTo({ x: this.state.width * index, y: 0, animated: true });
        }
        if (isUpdating && this.props.onPositionChanged) {
            this.setState({ position: index });
        }
    }

    _getPosition() {
        if (typeof this.state.position === 'number') {
            return this.state.position;
        }
        return this.state.position;
    }

    _next() {
        const pos = this.state.position === this.state.dataSource.length - 1 ? 0 : this.state.position + 1;
        this._move(pos);
        this.setState({ position: pos });
    }

    _prev() {
        const pos = this.state.position === 0 ? this.state.dataSource.length - 1 : this.state.position - 1;
        this._move(pos);
        this.setState({ position: pos });
    }

    componentDidUpdate(prevProps) {
        if (prevProps.position !== this.state.position) {
            this._move(this.state.position);
        }
    }

    componentWillMount() {
        let release = (e, gestureState) => {
            const width = this.state.width;
            const relativeDistance = gestureState.dx / width;
            const vx = gestureState.vx;
            let change = 0;

            if (relativeDistance < -0.5 || (relativeDistance < 0 && vx <= 0.5)) {
                change = 1;
            } else if (relativeDistance > 0.5 || (relativeDistance > 0 && vx >= 0.5)) {
                change = -1;
            }
            const position = this._getPosition();
            if (position === 0 && change === -1) {
                change = 0;
            } else if (position + change >= this.state.dataSource.length) {
                change = (this.state.dataSource.length) - (position + change);
            }
            this._move(position + change);
            return true;
        };

        this._panResponder = PanResponder.create({
            onPanResponderRelease: release
        });

        this.setState({
            interval: setInterval(() => {
                this.setState({
                    position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
                });
            }, 2000)
        });
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    render() {
        const width = this.state.width;
        const height = this.state.height;
        const position = this._getPosition();
        return (
            <View>
                {/* SECTION IMAGE */}
                <ScrollView
                    ref={ref => this._onRef(ref)}
                    decelerationRate={0.99}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEnabled={false}
                    {...this._panResponder.panHandlers}
                    style={[
                        styles.container,
                        { height: height }
                    ]}>
                    {this.state.dataSource.map((image, index) => {
                        const imageObject = typeof image.url === 'string' ? { uri: image.url } : image.url;
                        const imageComponent = (
                            <View key={index}>
                                <Image
                                    source={imageObject}
                                    style={{ height, width }} />
                            </View>
                        );
                        const imageComponentWithOverlay = (
                            <View key={index} style={styles.containerImage}>
                                <View style={styles.overlay}>
                                    <Image
                                        source={imageObject}
                                        style={{ height, width }} />
                                </View>
                            </View>
                        );

                        return this.props.overlay ? imageComponentWithOverlay : imageComponent
                    })}
                </ScrollView>
                {/* END SECTION IMAGE */}
                {/* SECTION INDICATOR */}
                <View
                    style={[
                        styles.layoutIndicator
                    ]}>
                    {this.state.dataSource.map((image, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                onPress={() => { return this._move(index); }}
                                style={[
                                    [
                                        styles.indicator,
                                        setIndicatorSize(15),
                                        setIndicatorColor('gray')
                                    ],
                                    position === index &&
                                    [
                                        styles.indicatorSelected,
                                        setIndicatorColor('#FFF')
                                    ]
                                ]}>
                                <View></View>
                            </TouchableOpacity>);
                    })}
                </View>
                {/* END SECTION INDICATOR */}
            </View>
        );
    }
}

Slideshow.defaultProps = {
    height: height,
    indicatorSize: 8,
    indicatorColor: 'gray',
    indicatorSelectedColor: '#FFF',
    scrollEnabled: true
}

Slideshow.propTypes = {
    indicatorSize: PropTypes.number,
    indicatorColor: PropTypes.string,
    indicatorSelectedColor: PropTypes.string,
    height: PropTypes.number,
    position: PropTypes.number,
    scrollEnabled: PropTypes.bool,
    containerStyle: PropTypes.object,
    overlay: PropTypes.bool,
    onPress: PropTypes.func,
    onPositionChanged: PropTypes.func,
};

const setIndicatorSize = function (size) {
    return {
        width: size,
        height: size,
        borderRadius: size / 2,
    };
}

const setIndicatorColor = function (color) {
    return {
        backgroundColor: color
    };
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#222',
    },
    layoutIndicator: {
        height: 15,
        position: 'absolute',
        bottom: 5,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'transparent',
    },
    indicator: {
        margin: 3,
        opacity: 0.9
    },
    indicatorSelected: {
        opacity: 1,
    },
    containerImage: {
        flex: 1,
        width: Dimensions.get('window').width,
    },
    overlay: {
        opacity: 0.5,
        backgroundColor: 'black',
    },
    layoutText: {
        position: 'absolute',
        paddingHorizontal: 15,
        bottom: 30,
        left: 0,
        right: 0,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'column',
        backgroundColor: 'transparent',
    },
    textTitle: {
        fontWeight: 'bold',
        fontSize: 15,
        color: 'white',
    },
    textCaption: {
        fontWeight: '400',
        fontSize: 12,
        color: 'white',
    }
});

