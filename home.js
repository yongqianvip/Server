/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import {connect} from 'react-redux';
import images from '../images';
// import CodePush from "react-native-code-push";
import Const from '../constant/Const';
import { WaterfallList } from "react-native-largelist-v3";
import HomeBanner from '../components/Home/HomeBanner';
import Seckill from '../components/Home/Seckill';
import NewForToday from '../components/Home/NewForToday';
import BrandsWall from '../components/Home/BrandsWall';
import OneAndMore from '../components/Home/OneAndMore';
import FastImage from 'react-native-fast-image'
import ImageWithPlaceholder from '../commonComponent/ImageWithPlaceholder';
import { getHomeData, updateItemHeight, mergePreListToList } from '../actions/home';
import { ChineseWithLastDateFooter } from "react-native-spring-scrollview/Customize";
import CustomRefreshHeader from '../commonComponent/CustomRefreshHeader';

class HomeScreen extends Component {
    currentPage = 0;
    constructor(props){
        super(props);
        this.state = {
            navBaropacity: 0,
            offsetY: 0,
        }
        this._renderItem = this._renderItem.bind(this);
        this._renderHeader = this._renderHeader.bind(this);
        this.refreshHomePage = this.refreshHomePage.bind(this);
        this._renderRowHeight = this._renderRowHeight.bind(this);
    }

    _renderHeader(){
        const {header} = this.props;
        const row = header.map((item, index)=>{
            if (item.type == 'homeBanner') {
                return <HomeBanner key={item.type + index} dataSource={item.content}/>
            } else if (item.type == 'seckill') {
                return <Seckill key={item.type + index} dataSource={item.content}/>
            } else if (item.type == 'singleList') {
                // 需确认：单品始终在最下方？？？
            } else if (item.type == 'brandwall') {
                return <BrandsWall key={item.type + index} dataSource={item.content}/>
            } else if (item.type == 'oneAndMore') {
                return <OneAndMore key={item.type + index} dataSource={item.content}/>
            } else if (item.type == 'newForToday') {
                return <NewForToday key={item.type + index} dataSource={item.content}/>
            }
        })
        return (
            <View>{row}</View>
        )
    }

    _renderItem(item, index) {
        let sizeView = null;
        if (item.size) {
            sizeView = item.size.map((item, sizeIndex) => {
                return (
                    <View key={'size'+sizeIndex} 
                        style={{paddingLeft: 3, paddingRight: 3, backgroundColor: '#ccc', marginLeft: 2, marginRight: 2}}
                        >
                        <Text>{item}</Text>
                    </View>
                )
            })
        }   
        return (
            <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10, alignItems: 'center'}} key={'home_row'+index}>
                <ImageWithPlaceholder
                    style={{ width: parseInt(Const.Device.width * 0.5 * 0.75), height: parseInt(Const.Device.width * 0.5)}}
                    source={{
                        uri: item.image_url,
                        priority: FastImage.priority.normal,
                    }}
                    resizeMode={FastImage.resizeMode.contain}
                    placeholder={images.image_placeholder_3_4}
                />
                <View style={{height: 30}}>
                    <Text numberOfLines={1}>{item.name}</Text>
                </View>
                <View key={'scroll_size' + index} style={{ flexDirection: 'row', width: Const.Device.width / 2, flexWrap: 'wrap', marginBottom: 5, marginTop: 5,}}>
                    {sizeView}
                </View>
            </View>
        )
    };

    _renderRowHeight(item, index){
        const {heightData} = this.props;
        const sizeViewHeight = heightData[item.product_id] ? heightData[item.product_id] : 0;
        // console.log('尺码View 高度 = ',item.product_id, sizeViewHeight);
        return 10 + Const.Device.width * 0.5 + 30 + sizeViewHeight + 10;
    }

    _renderScrollView(){
        const {preList} = this.props; 
        const scrollviewContent = preList.map((item, index)=>{
            let sizeView = null;
            if (item.size) {
                sizeView = item.size.map((item, sizeIndex) => {
                    return (
                        <View key={'size'+sizeIndex} 
                            style={{paddingLeft: 3, paddingRight: 3, backgroundColor: 'gray', marginLeft: 2, marginRight: 2}}
                            >
                            <Text>{item}</Text>
                        </View>
                    )
                })
            }   
            return <View key={'scroll_size' + index} style={{ flexDirection: 'row', width: Const.Device.width / 2, flexWrap: 'wrap', marginBottom: 5, marginTop: 5,}}
                onLayout={({nativeEvent: { layout: {x, y, width, height}}})=>{
                    this.props.dispatch(updateItemHeight({productId: item.product_id, height: parseInt(height)}));
                }}>
                {sizeView}
            </View>
        })
        return scrollviewContent
    }

    componentDidMount() {
        this.refreshHomePage();
    }

    refreshHomePage(page=0){
        const params = {
            url: Const.API.GET_HOME_DATA,
            method: 'get',
            params: {
                page: page+1
            },
            success: ()=>{
                this._list && this._list.endRefresh();
                this._list && this._list.endLoading();
                currentPage = page + 1;
                setTimeout(() => {
                    // 有一个计算layout的时间，延迟500毫秒赋值list
                    this.props.dispatch(mergePreListToList())
                }, 500)
            },
            failure: ()=>{
                this._list && this._list.endRefresh();
                this._list && this._list.endLoading();
            }
        }
        this.props.dispatch(getHomeData(params))
    }
    render() {
        const {list, preList} = this.props; 
        return (
            <View style={styles.container}>
                <WaterfallList
                    ref={ref=>(this._list = ref)}
                    refreshHeader={CustomRefreshHeader}
                    onRefresh={()=>{
                        this.refreshHomePage()
                    }}
                    onScroll={({nativeEvent:{contentOffset:{x, y}}})=>{
                        
                    }}
                    renderHeader={this._renderHeader}
                    style={styles.listContainer}
                    data={list}
                    heightForItem={this._renderRowHeight}
                    renderItem={this._renderItem}
                    numColumns={2}
                    allLoaded={false}
                    loadingFooter={ChineseWithLastDateFooter}
                    onLoading={()=>{
                        // FIXME: currentPage 有效？
                        this.refreshHomePage(currentPage)
                    }}
                />
                <ScrollView style={{width: Const.Device.width, height: 40, position: 'absolute', backgroundColor: 'orange'}}> 
                    {this._renderScrollView()}
                </ScrollView>
            </View>
        );
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    searchBar: {
        ...StyleSheet.absoluteFillObject,
        height: Const.Device.navigationHeight,
        backgroundColor: 'orange',
        opacity: 0
    },
    listContainer: {
        flex: 1,
    },
    homeNavigationBar: {
        height: Const.Device.navigationHeight,
        position: 'absolute',
        width: Const.Device.width,
        opacity: 0.1,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

const mapStateToProps = state => {
    return {
        header: state.home.header,
        list: state.home.list,
        preList: state.home.preList,
        heightData: state.home.heightData
    };
};

export default connect(mapStateToProps)(HomeScreen);

{/* <Touchable
    onPress={ () => {
        // const userInfo = await AuthUtil.getUserInfo();
        // console.log("userInfo",userInfo);
        // await this.fetchPhoneAreaData();
        if(this.state.downLoadingStr == "success"){
            alert("1111");
            NativeModules.RunWayGoModule.installUpdateApk();
        }else{
            NativeModules.RunWayGoModule.downLoadApk(apkAddress);
        }
    }}>
<Text style={styles.welcome}>{homeBanner.length>0?homeBanner[0].desc:"hahahha"}</Text>
    <Image source={require('../image/login/loading.gif')} style={{width:80,height:40}}/>
    <Image source={require('../image/login/icon_invitation_black.png')} style={{width:80,height:40}}/>
</Touchable>
<Text style={styles.instructions}>{this.state.downLoadingStr}</Text>
<Text style={styles.instructions}>{instructions}</Text> */}
