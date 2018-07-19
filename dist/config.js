const config = {
    // 编码方式,默认为GBK,按需可修改为UTF-8等。
    encoding:"GBK",

    // 显示顶部附加信息
    showMessage : true,

    // 附加信息内容
    itemLabel : "榜首选手",
    typeLabel : "所属协会",
    item_x : 300,

    // 播放速度
    speed : 1,

    // 文字水平高度
    text_y : -50,

    // 长度小于display_barInfo的bar将不显示barInfo
    display_barInfo : 200,

    // 显示类型
    use_type_info : true,

    // 使用计数器
    use_counter : false,
    // 每个数据的间隔日期
    step : 7,

    format : '.0f',
    // 图表左右上下间距
    left_margin : 200,
    right_margin : 150,
    top_margin : 200,
    bottom_margin : 0,

    // 时间标签坐标
    dateLabel_x : 1060,
    dateLabel_y : 750,
    
    // 消失分界线：区分柱子消失时是上浮还是下浮，0为全部下浮
    dividing_line : 0,
}