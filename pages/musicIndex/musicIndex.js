// pages/musicIndex/musicIndex.js
import requestAjax from '../../utils/request'

Page({

    /**
     * 页面的初始数据
     */
    data: {
        bannerList:[],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: async function (options) {
        let bannerListData = await requestAjax('/banner', {
            type: 2
        })
        console.log(bannerListData)
        this.setData({
            bannerList:bannerListData.banners
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})