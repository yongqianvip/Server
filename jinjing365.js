var capitals = [
    // 2020-04-11
    {center: [116.460942,39.919595],aa: "2",name: "京广桥西东向西",text: '京广桥西东向西' },
    {center: [116.418137,39.908112],aa: "1",name: "东单路口南向北",text: '东单路口南向北' },
    {center: [116.461228,39.93799],aa: "2",name: "三里屯东三街东口西由东向西",text: '三里屯东三街东口西由东向西' },
    {center: [116.387573,39.871135],aa: "1",name: "陶然桥外环主路外侧",text: '陶然桥外环主路外侧' },
    {center: [116.46117,39.876053],aa: "2",name: "潘家园桥外环主路",text: '潘家园桥外环主路' },
    {center: [116.294111,39.862192],aa: "1",name: "东大街三零七医院门口南向北",text: '东大街三零七医院门口南向北' },
    {center: [116.329835,39.780366],aa: "1",name: "欣阳桥北北向南",text: '欣阳桥北北向南' },
    {center: [116.338747,39.967276],aa: "1",name: "四道口路北口南北向南",text: '四道口路北口南北向南' },
    {center: [116.419796,39.803105],aa: "1",name: "北京航天总医院门前人行灯东向西",text: '北京航天总医院门前人行灯东向西' },
    {center: [116.483598,39.803575],aa: "1",name: "文化园西路与科慧大道交口西向东",text: '文化园西路与科慧大道交口西向东' },
    {center: [116.311105,39.888948],aa: "1",name: "莲花池南路西口东东向西",text: '莲花池南路西口东东向西' },
    {center: [116.165108,40.128678],aa: "1",name: "沙阳路东贯市东路口西双向主辅路",text: '沙阳路东贯市东路口西双向主辅路' },
    {center: [116.427425,39.85851],aa: "1",name: "刘家窑桥东过街桥双向辅路",text: '刘家窑桥东过街桥双向辅路' },
    {center: [116.394723,39.802884],aa: "1",name: "警备西路新华路南口公交站点东向西",text: '警备西路新华路南口公交站点东向西' },
    {center: [116.417895,39.91552],aa: "1",name: "金宝街西口西向东",text: '金宝街西口西向东' },
    {center: [116.417923,39.968877],aa: "1",name: "和平西桥南路口由南向北",text: '和平西桥南路口由南向北' },
    {center: [116.478529,39.905235],aa: "1",name: "光辉桥东东向西",text: '光辉桥东东向西' },
    {center: [116.321298,39.9073],aa: "2",name: "羊坊店路北口南向北",text: '羊坊店路北口南向北' },
    {center: [116.322316,39.77306],aa: "1",name: "香园路与兴业大街交口北向南",text: '香园路与兴业大街交口北向南' },
    {center: [116.461799,39.941347],aa: "1",name: "农展馆桥北外环南向北（高峰）",text: '农展馆桥北外环南向北（高峰）' },
    {center: [116.455312,39.93367],aa: "2",name: "南三里屯路路口西向东",text: '南三里屯路路口西向东' },
    {center: [116.418559,39.799117],aa: "1",name: "南大红门路六营门路路口北向南（高峰）",text: '南大红门路六营门路路口北向南（高峰）' },
    {center: [116.345774,39.83094],aa: "1",name: "京开马家楼桥下出京（高峰）",text: '京开马家楼桥下出京（高峰）' },
    {center: [116.526973,39.893043],aa: "2",name: "广渠路朝阳半壁店桥东向西（高峰）",text: '广渠路朝阳半壁店桥东向西（高峰）' },
    {center: [116.283384,39.90753],aa: "2",name: "复兴路与西翠路口东向西",text: '复兴路与西翠路口东向西' },
    {center: [116.328745,39.757508],aa: "2",name: "兴和街与康庄路交口东向西",text: '兴和街与康庄路交口东向西' },
    {center: [116.331445,39.766786],aa: "1",name: "兴华大街与乐园路路口东向西",text: '兴华大街与乐园路路口东向西' },
    {center: [116.264626,39.90748],aa: "2",name: "复兴路与永定路交叉口东西双向",text: '复兴路与永定路交叉口东西双向' },
    {center: [116.334889,39.776637],aa: "2",name: "兴丰大街与北兴路路口西向东",text: '兴丰大街与北兴路路口西向东' },
    {center: [116.339351,39.737673],aa: "2",name: "兴丰大街与富强路交叉口北向南",text: '兴丰大街与富强路交叉口北向南' },
    {center: [116.252529,39.907369],aa: "2",name: "复兴路与玉泉路交叉口西向东方向",text: '复兴路与玉泉路交叉口西向东方向' },
    {center: [116.42518,39.954281],aa: "2",name: "和平里南街东口北向南",text: '和平里南街东口北向南' },
    {center: [116.496942,39.997893],aa: "2",name: "京密路五元桥南天桥南北双向",text: '京密路五元桥南天桥南北双向' },
    {center: [116.323524,40.172376],aa: "2",name: "顺沙路与南百路口北由南向北",text: '顺沙路与南百路口北由南向北' },
    {center: [116.383372,39.803182],aa: "1",name: "南苑西路与北马路交叉口南北双向早晚高峰（网友自助）",text: '南苑西路与北马路交叉口南北双向早晚高峰（网友自助）' },
    {center: [116.36327,39.901153],aa: "1",name: "闹市口北向南（网友自助）",text: '闹市口北向南（网友自助）' },
    {center: [116.325521,39.757266],aa: "1",name: "康庄路东向西（网友在线提交）",text: '康庄路东向西（网友在线提交）' },
    {center: [116.503883,39.987964],aa: "2",name: "酒仙桥北路孙家村口东向西",text: '酒仙桥北路孙家村口东向西' },
    {center: [116.2267,39.907295],aa: "2",name: "鲁谷西路与石景山路交叉口北向南",text: '鲁谷西路与石景山路交叉口北向南' },
    {center: [116.453659,39.832722],aa: "2",name: "肖村桥东过街桥内外环双向",text: '肖村桥东过街桥内外环双向' },
    {center: [116.322701,39.746345],aa: "2",name: "兴业大街清源北路路口北向南",text: '兴业大街清源北路路口北向南' },
    {center: [116.145465,40.068067],aa: "2",name: "北清路高里掌北桥西向东辅路",text: '北清路高里掌北桥西向东辅路' },
    {center: [116.388192,39.967691],aa: "2",name: "双旗杆路北口南",text: '双旗杆路北口南' },
    {center: [116.374973,39.765505],aa: "2",name: "五环敬贤桥外环",text: '五环敬贤桥外环' },
    {center: [116.31308,39.743493],aa: "2",name: "兴旺路与清源路路口南向北",text: '兴旺路与清源路路口南向北' },
    {center: [116.496847,39.995133],aa: "2",name: "机场辅路大山桥北南北双向",text: '机场辅路大山桥北南北双向' },
    {center: [116.418697,39.969202],aa: "1",name: "三环路和平西桥东东向西",text: '三环路和平西桥东东向西' },
    {center: [116.461992,39.94126],aa: "1",name: "三环辅路农展桥南向北",text: '三环辅路农展桥南向北' },
    {center: [116.593515,39.820753],aa: "1",name: "京津高速台湖收费站北南北双向",text: '京津高速台湖收费站北南北双向' },
    {center: [116.310641,39.746738],aa: "1",name: "兴旺路与清远北路路口由北向南",text: '兴旺路与清远北路路口由北向南' },
    {center: [116.315336,39.777885],aa: "1",name: "兴旺路与北兴路交叉口南向北",text: '兴旺路与北兴路交叉口南向北' },
    {center: [116.32865,39.790372],aa: "2",name: "欣宁街与宏福路口双向",text: '欣宁街与宏福路口双向' },
    {center: [116.328383,39.726994],aa: "1",name: "兴业大街与永华路路口东向西",text: '兴业大街与永华路路口东向西' },
    {center: [116.544112,39.845972],aa: "2",name: "五环路化工桥双向",text: '五环路化工桥双向' },
    {center: [116.339609,39.731845],aa: "1",name: "黄村西大街与兴丰大街交口东向西",text: '黄村西大街与兴丰大街交口东向西' },
    {center: [116.451987,39.977449],aa: "2",name: "望京桥南太阳宫中路主路南向北",text: '望京桥南太阳宫中路主路南向北' },
    {center: [116.498217,39.997432],aa: "2",name: "机杨高速五元桥南进京",text: '机杨高速五元桥南进京' },
    {center: [116.457603,39.871448],aa: "2",name: "华威桥西由西向东",text: '华威桥西由西向东' },
    {center: [116.322719,39.743613],aa: "1",name: "清源路和兴业大街路口南向北",text: '清源路和兴业大街路口南向北' },
    {center: [116.381724,40.001847],aa: "1",name: "大屯路林萃路南口东西向东（高峰）",text: '大屯路林萃路南口东西向东（高峰）' },
    {center: [116.519317,39.745042],aa: "2",name: "博兴三路太和东桥北双向（主路）",text: '博兴三路太和东桥北双向（主路）' },
    {center: [116.520181,39.742304],aa: "2",name: "博兴三路新凤河路口南向北（辅路）",text: '博兴三路新凤河路口南向北（辅路）' },
    {center: [116.519722,39.74223],aa: "2",name: "博兴三路新凤河路口北向南（辅路）",text: '博兴三路新凤河路口北向南（辅路）' },
    {center: [116.30951,39.763241],aa: "2",name: "兴旺路与金星路路口南向北和西向东",text: '兴旺路与金星路路口南向北和西向东' },
    {center: [116.47505,39.893327],aa: "1",name: "双井桥西东桥由东向西",text: '双井桥西东桥由东向西' },
    {center: [116.344162,39.722131],aa: "2",name: "林校北路大兴桥西侧西向东",text: '林校北路大兴桥西侧西向东' },
    {center: [116.239468,40.228728],aa: "2",name: "北环路与东环路路口南侧北向南",text: '北环路与东环路路口南侧北向南' },
    {center: [116.250322,40.227716],aa: "2",name: "北环路与松园路路口南侧北向南",text: '北环路与松园路路口南侧北向南' },
    {center: [116.227872,40.220266],aa: "1",name: "政府街与西环路路口东侧西向东",text: '政府街与西环路路口东侧西向东' },
    {center: [116.310386,39.897709],aa: "1",name: "三环辅路莲花桥下北侧，拍从莲石路盘桥到三环。南向北",text: '三环辅路莲花桥下北侧，拍从莲石路盘桥到三环。南向北' },
    {center: [116.307207,39.78495],aa: "2",name: "丰园路与京良路交叉口北向南（高峰）",text: '丰园路与京良路交叉口北向南（高峰）' },
    {center: [115.990123,40.473639],aa: "2",name: "庆园街地税路口东东西双向",text: '庆园街地税路口东东西双向' },
    {center: [116.332473,39.731998],aa: "2",name: "兴华大街与黄村西大街交口北向南",text: '兴华大街与黄村西大街交口北向南' },
    {center: [116.34059,39.758165],aa: "2",name: "黄村康庄路与滨河路交口南向北",text: '黄村康庄路与滨河路交口南向北' },
    {center: [116.461063,39.916512],aa: "1",name: "景华街东口西由西向东",text: '景华街东口西由西向东' },
    {center: [116.46093,39.914617],aa: "1",name: "景华南街东口西由东向西",text: '景华南街东口西由东向西' },
    {center: [116.45888,39.928494],aa: "1",name: "白家庄路第八十中学门口西向东",text: '白家庄路第八十中学门口西向东' },
    {center: [116.231287,39.878811],aa: "1",name: "丰仪北路东口北北向南",text: '丰仪北路东口北北向南' },
    {center: [116.421203,39.875418],aa: "2",name: "玉蜓桥北天桥南北双向",text: '玉蜓桥北天桥南北双向' },
    {center: [116.557206,40.039763],aa: "2",name: "温榆大桥西东西双向",text: '温榆大桥西东西双向' },
    {center: [116.51911,39.777219],aa: "2",name: "景园北街南向北（违章上就是这么写的，位置确定）",text: '景园北街南向北（违章上就是这么写的，位置确定）' },
    {center: [116.163965,40.098352],aa: "2",name: "翠湖北路纪检学院西向东",text: '翠湖北路纪检学院西向东' },
    {center: [116.50902,39.838934],aa: "2",name: "老君堂中路北向南",text: '老君堂中路北向南' },
    {center: [116.211169,39.889395],aa: "2",name: "五环路衙门口桥南天桥双向",text: '五环路衙门口桥南天桥双向' },
    {center: [116.589295,39.867332],aa: "2",name: "黑庄户桥出京（最内侧也拍）",text: '黑庄户桥出京（最内侧也拍）' },
    {center: [116.697452,39.863215],aa: "2",name: "张彩路张家湾北桥北南北双向",text: '张彩路张家湾北桥北南北双向' },
    {center: [116.537093,39.941444],aa: "2",name: "平房桥西姚家园路东西双向",text: '平房桥西姚家园路东西双向' },
    {center: [116.258367,40.213568],aa: "2",name: "南环东路与龙水路路口西侧-东向西方向",text: '南环东路与龙水路路口西侧-东向西方向' },
    {center: [116.240415,40.21455],aa: "2",name: "南环路与东环路路口北南向北",text: '南环路与东环路路口北南向北' },
    {center: [116.159913,40.068427],aa: "2",name: "北清路与温阳路十字路口东向西",text: '北清路与温阳路十字路口东向西' },
    {center: [116.577644,39.755409],aa: "2",name: "六环出马驹桥出口处南向北",text: '六环出马驹桥出口处南向北' },
    {center: [116.532677,39.769817],aa: "2",name: "宏达南路与康定街交叉口东西双向/南向北",text: '宏达南路与康定街交叉口东西双向/南向北' },
    {center: [116.149294,40.068264],aa: "2",name: "北清路高里掌北桥东西向东",text: '北清路高里掌北桥东西向东' },
    {center: [116.696421,39.869522],aa: "2",name: "103国道土桥新桥西东西双向",text: '103国道土桥新桥西东西双向' },
    {center: [116.439799,40.01602],aa: "2",name: "顾家庄桥南南向北",text: '顾家庄桥南南向北' },
    {center: [116.577134,39.755885],aa: "2",name: "融商六路马驹桥东站西南北双向",text: '融商六路马驹桥东站西南北双向' },
    {center: [116.43119,40.022151],aa: "2",name: "五环北苑桥东东向西",text: '五环北苑桥东东向西' },
    {center: [116.424294,40.02212],aa: "2",name: "五环北苑桥东西向东",text: '五环北苑桥东西向东' },
    {center: [116.622997,39.803227],aa: "2",name: "潞西路次渠桥西东西双向",text: '潞西路次渠桥西东西双向' },
    {center: [116.503286,39.879462],aa: "1",name: "广化大街化工路口北第一个信号灯北向南",text: '广化大街化工路口北第一个信号灯北向南' },
    {center: [116.331474,39.779309],aa: "1",name: "五环路兴华桥东外环",text: '五环路兴华桥东外环' },
    {center: [116.407466,39.986357],aa: "1",name: "安慧桥南南北双向",text: '安慧桥南南北双向' },
    {center: [116.28889,40.013568],aa: "1",name: "五环路肖家河桥内环",text: '五环路肖家河桥内环' },
    {center: [116.58145,39.910185],aa: "2",name: "京通快速双桥东天桥双向",text: '京通快速双桥东天桥双向' },
    {center: [116.422095,39.803417],aa: "1",name: "北京市航天中学门前东向西",text: '北京市航天中学门前东向西' },
    {center: [116.312834,39.743555],aa: "1",name: "清源西路与兴旺大街交叉口由东向西",text: '清源西路与兴旺大街交叉口由东向西' },
    {center: [116.548878,39.874596],aa: "1",name: "五环18.3、19公里处（五方桥北）双向",text: '五环18.3、19公里处（五方桥北）双向' },
    {center: [115.96986,40.465584],aa: "1",name: "高塔街温泉西里西门至北关北口方向不详",text: '高塔街温泉西里西门至北关北口方向不详' },
    {center: [116.227137,40.224115],aa: "2",name: "西环路与鼓楼西街交叉口东侧西向东",text: '西环路与鼓楼西街交叉口东侧西向东' },
    {center: [116.429694,39.811523],aa: "1",name: "东高地路口南向北",text: '东高地路口南向北' },
    {center: [116.535025,39.839618],aa: "1",name: "西直河桥北南向北",text: '西直河桥北南向北' },
    {center: [116.354271,39.852031],aa: "2",name: "三环玉泉营桥东外环主辅路",text: '三环玉泉营桥东外环主辅路' },
    {center: [116.454178,39.862434],aa: "1",name: "三环分钟寺桥内环主路",text: '三环分钟寺桥内环主路' },
    {center: [116.40827,39.85709],aa: "1",name: "三环木樨园桥东内环主路",text: '三环木樨园桥东内环主路' },
    {center: [116.460506,39.881538],aa: "1",name: "劲松南路东口西向东",text: '劲松南路东口西向东' },
    {center: [116.482231,40.045931],aa: "2",name: "京承高速吉祥寺桥南北双向（好像是外侧不拍）",text: '京承高速吉祥寺桥南北双向（好像是外侧不拍）' },
    {center: [116.45837,39.897304],aa: "1",name: "光华中街与广和东三路交叉口西向东",text: '光华中街与广和东三路交叉口西向东' },
    {center: [116.357832,39.91393],aa: "1",name: "月坛南桥东东向西",text: '月坛南桥东东向西' },
    {center: [116.307057,39.698698],aa: "1",name: "黄良路与天贵大街路口西向东",text: '黄良路与天贵大街路口西向东' },
    {center: [116.709366,39.887174],aa: "2",name: "滨河中路小圣庙桥西 东西双向",text: '滨河中路小圣庙桥西 东西双向' },
    {center: [116.338466,39.722437],aa: "2",name: "林校北路和兴丰大街路口东西双向",text: '林校北路和兴丰大街路口东西双向' },
    {center: [116.327225,39.985807],aa: "1",name: "四环中关村三桥西向东",text: '四环中关村三桥西向东' },
    {center: [116.537185,39.947449],aa: "2",name: "五环路平房桥北 双向",text: '五环路平房桥北 双向' },
    {center: [116.7439,39.857116],aa: "1",name: "G103/宋梁路(路口)（不确定）",text: 'G103/宋梁路(路口)（不确定）' },
    {center: [116.447003,39.993914],aa: "1",name: "京承高速望京西站出京（可提前进辅路）",text: '京承高速望京西站出京（可提前进辅路）' },
    {center: [116.121048,39.807725],aa: "1",name: "魏各庄路西王佐南桥 西向东",text: '魏各庄路西王佐南桥 西向东' },
    {center: [116.128021,39.828202],aa: "1",name: "大灰厂路下庄村北南向北",text: '大灰厂路下庄村北南向北' },
    {center: [116.489833,39.922831],aa: "1",name: "红领巾桥内环主路（疑似高峰）",text: '红领巾桥内环主路（疑似高峰）' },
    {center: [116.535952,39.77154],aa: "1",name: "康定街与永昌南路交叉口",text: '康定街与永昌南路交叉口' },
    {center: [116.462944,39.72643],aa: "1",name: "黄马路南大红门桥西 东向西",text: '黄马路南大红门桥西 东向西' },
    {center: [116.162947,39.77428],aa: "2",name: "京港澳京良桥下南北双向",text: '京港澳京良桥下南北双向' },
    {center: [116.110014,39.720445],aa: "2",name: "阎村桥下南北双向",text: '阎村桥下南北双向' },
    {center: [116.374495,39.856878],aa: "2",name: "万芳桥东天桥外环辅路",text: '万芳桥东天桥外环辅路' },
    {center: [116.136552,39.857728],aa: "1",name: "大灰厂东路北宫桥东西向东",text: '大灰厂东路北宫桥东西向东' },
    {center: [116.517751,39.97759],aa: "1",name: "将台东路八门房村口双向",text: '将台东路八门房村口双向' },
    {center: [116.343019,39.742578],aa: "1",name: "清源路/龙河路(路口)东向西",text: '清源路/龙河路(路口)东向西' },
    {center: [116.381788,39.758059],aa: "2",name: "五环路主路团河桥双向",text: '五环路主路团河桥双向' },
    {center: [116.638979,39.812815],aa: "1",name: "铺大路蒋新庄桥南北向南",text: '铺大路蒋新庄桥南北向南' },
    {center: [116.502908,39.971781],aa: "1",name: "将台路驼房营路口北向南",text: '将台路驼房营路口北向南' },
    {center: [116.322431,39.777631],aa: "1",name: "北兴路与兴业大街交叉口东向西",text: '北兴路与兴业大街交叉口东向西' },
    {center: [116.446464,39.986201],aa: "2",name: "望和桥东过街天桥主路外环",text: '望和桥东过街天桥主路外环' },
    {center: [116.233154,40.229322],aa: "2",name: "北环路与鼓楼北街南侧北向南",text: '北环路与鼓楼北街南侧北向南' },
    {center: [116.289959,39.822727],aa: "1",name: "丰茂南路与丰葆路交叉口南向北",text: '丰茂南路与丰葆路交叉口南向北' },
    {center: [116.2455,39.693351],aa: "1",name: "黄良路与左堤路交叉口西 东向西",text: '黄良路与左堤路交叉口西 东向西' },
    {center: [116.29056,39.814265],aa: "1",name: "丰葆路富锦家园路口南向北",text: '丰葆路富锦家园路口南向北' },
    {center: [116.332507,39.705163],aa: "2",name: "京开高速双源桥北天桥双向",text: '京开高速双源桥北天桥双向' },
    {center: [116.678806,40.008845],aa: "1",name: "通顺路北窑上桥南南北双向",text: '通顺路北窑上桥南南北双向' },
    {center: [116.123531,39.793115],aa: "2",name: "泉湖东路刘太庄南路口东西双向",text: '泉湖东路刘太庄南路口东西双向' },
    {center: [116.322224,39.699419],aa: "1",name: "新源大街盛源桥北南向北",text: '新源大街盛源桥北南向北' },
    {center: [115.970046,40.455128],aa: "1",name: "延庆康安小区东南门双向",text: '延庆康安小区东南门双向' },
    {center: [115.979955,40.454564],aa: "1",name: "延庆夏都大桥北 南北双向",text: '延庆夏都大桥北 南北双向' },
    {center: [115.983023,40.461882],aa: "1",name: "延庆川北小区附近",text: '延庆川北小区附近' },
    {center: [116.258748,40.217498],aa: "1",name: "亢山前路与龙水路路口西东西向",text: '亢山前路与龙水路路口西东西向' },
    {center: [116.250319,40.228331],aa: "2",name: "北环东路与松园路口北向南",text: '北环东路与松园路口北向南' },
    {center: [116.239032,40.229603],aa: "2",name: "北环路与东环路路口西侧东向西",text: '北环路与东环路路口西侧东向西' },
    {center: [116.228283,40.21254],aa: "2",name: "南环路与西环路路口 西向东",text: '南环路与西环路路口 西向东' },
    {center: [116.244689,40.213321],aa: "1",name: "昌平南环东路与燕平路路口北",text: '昌平南环东路与燕平路路口北' },
    {center: [116.226965,40.220617],aa: "2",name: "西环路与政府街路口北侧南向北",text: '西环路与政府街路口北侧南向北' },
    {center: [116.227091,40.214764],aa: "2",name: "永安公园路与西环路路口北侧南向北",text: '永安公园路与西环路路口北侧南向北' },
    {center: [116.233858,40.212747],aa: "1",name: "南环路与鼓楼南街路口南向北",text: '南环路与鼓楼南街路口南向北' },
    {center: [116.250739,40.213272],aa: "1",name: "南环路与亢山路路口南向北",text: '南环路与亢山路路口南向北' },
    {center: [116.262121,40.221812],aa: "2",name: "府学路与水库路路口东向西",text: '府学路与水库路路口东向西' },
    {center: [116.226516,40.229326],aa: "1",name: "北环路与西环路交叉口（北向南 西向东）",text: '北环路与西环路交叉口（北向南 西向东）' },
    {center: [116.625883,40.310169],aa: "1",name: "怀柔南大街与龙山东路交汇 西向东",text: '怀柔南大街与龙山东路交汇 西向东' },
    {center: [116.483274,40.105525],aa: "2",name: "京承高速鲁疃桥下南北双向",text: '京承高速鲁疃桥下南北双向' },
    {center: [116.2772,40.17158],aa: "1",name: "南丰路中央财经大学西门北向南（辅路）南向北不拍",text: '南丰路中央财经大学西门北向南（辅路）南向北不拍' },
    {center: [116.48183,39.908226],aa: "1",name: "京通快速华贸过街天桥",text: '京通快速华贸过街天桥' },
    {center: [116.420477,39.803209],aa: "1",name: "万源北路航天医院东门东向西",text: '万源北路航天医院东门东向西' },
    {center: [116.630477,40.333235],aa: "1",name: "青春路大地休闲港湾路口南北向",text: '青春路大地休闲港湾路口南北向' },
    {center: [116.639987,40.341726],aa: "1",name: "富乐大街与迎宾路东西向",text: '富乐大街与迎宾路东西向' },
    {center: [116.637359,40.321187],aa: "1",name: "迎宾路与兴怀大街南北向",text: '迎宾路与兴怀大街南北向' },
    {center: [116.637415,40.31628],aa: "1",name: "迎宾路与府前街南北双向",text: '迎宾路与府前街南北双向' },
    {center: [116.637148,40.319061],aa: "1",name: "迎宾路与后横街路口南北向",text: '迎宾路与后横街路口南北向' },
    {center: [116.644945,40.321272],aa: "1",name: "兴怀大街至开放路交叉路口南北向",text: '兴怀大街至开放路交叉路口南北向' },
    {center: [116.139829,40.064887],aa: "1",name: "温北路高里掌桥南东西双向",text: '温北路高里掌桥南东西双向' },
    {center: [116.632362,40.308656],aa: "1",name: "南华大街地税前交叉路口东西向",text: '南华大街地税前交叉路口东西向' },
    {center: [116.460815,39.94131],aa: "1",name: "农展桥西东西向",text: '农展桥西东西向' },
    {center: [116.424137,39.987405],aa: "2",name: "惠新东街惠新东桥南北向南",text: '惠新东街惠新东桥南北向南' },
    {center: [116.340245,39.992978],aa: "1",name: "成府路王庄路口东西向",text: '成府路王庄路口东西向' },
    {center: [116.219749,39.97288],aa: "1",name: "五环闵西桥双向",text: '五环闵西桥双向' },
    {center: [116.229678,39.840647],aa: "1",name: "五环宛平桥南双向",text: '五环宛平桥南双向' },
    {center: [116.167015,40.099872],aa: "1",name: "翠湖北路纪检学院东向西",text: '翠湖北路纪检学院东向西' },
    {center: [116.106624,39.703753],aa: "2",name: "京港澳高速房山梨园桥双向",text: '京港澳高速房山梨园桥双向' },
    {center: [116.709264,39.98712],aa: "2",name: "徐尹路徐辛庄桥西东向西",text: '徐尹路徐辛庄桥西东向西' },
    {center: [116.213481,39.698792],aa: "1",name: "107国道葫芦垡桥北北向南",text: '107国道葫芦垡桥北北向南' },
    {center: [116.241162,39.858988],aa: "1",name: "京港澳高速大瓦窑桥双向",text: '京港澳高速大瓦窑桥双向' },
    {center: [116.381889,39.721757],aa: "2",name: "黄马路刘二村路口东向西",text: '黄马路刘二村路口东向西' },
    {center: [116.445204,39.859637],aa: "1",name: "方庄东路三环内",text: '方庄东路三环内' },
    {center: [116.211387,39.916642],aa: "1",name: "五环主路五景桥双向",text: '五环主路五景桥双向' },
    {center: [116.302919,40.088781],aa: "1",name: "京藏二拨子桥下双向",text: '京藏二拨子桥下双向' },
    {center: [116.710458,39.902392],aa: "1",name: "运河东大街杨坨桥西西向东",text: '运河东大街杨坨桥西西向东' },
    {center: [116.353105,39.993417],aa: "1",name: "成府路东口南向北",text: '成府路东口南向北' },
    {center: [116.603167,40.031912],aa: "2",name: "京平管头桥西双向",text: '京平管头桥西双向' },
    {center: [116.646024,40.026421],aa: "1",name: "京平半壁店收费站东西向东",text: '京平半壁店收费站东西向东' },
    {center: [116.417268,39.857121],aa: "1",name: "赵公口桥东过街桥外环辅路",text: '赵公口桥东过街桥外环辅路' },
    {center: [116.419784,39.768547],aa: "2",name: "五环饮鹿池桥内环",text: '五环饮鹿池桥内环' },
    {center: [116.329975,39.777062],aa: "1",name: "兴华大街与北兴路交叉口东向西",text: '兴华大街与北兴路交叉口东向西' },
    {center: [116.489743,39.887097],aa: "2",name: "大郊亭桥南天桥双向",text: '大郊亭桥南天桥双向' },
    {center: [116.545084,39.74658],aa: "1",name: "黄马路漷马路交叉口西东向西",text: '黄马路漷马路交叉口西东向西' },
    {center: [116.58186,39.756943],aa: "2",name: "四支路马驹桥6号桥北南向北",text: '四支路马驹桥6号桥北南向北' },
    {center: [116.594245,39.759219],aa: "2",name: "兴贸南街马团路口东西双向",text: '兴贸南街马团路口东西双向' },
    {center: [116.651092,40.035616],aa: "1",name: "李天路李天桥西西向东",text: '李天路李天桥西西向东' },
    {center: [116.498877,40.152491],aa: "1",name: "高白路西王路东桥南双向",text: '高白路西王路东桥南双向' },
    {center: [116.52428,40.146091],aa: "2",name: "天北路方氏渠东桥南南北双向",text: '天北路方氏渠东桥南南北双向' },
    {center: [116.312383,39.769988],aa: "1",name: "兴旺路与双高路交叉口北向南",text: '兴旺路与双高路交叉口北向南' },
    {center: [116.706361,39.909999],aa: "1",name: "玉带河大街东六环西侧路路口西向东",text: '玉带河大街东六环西侧路路口西向东' },
    {center: [116.527573,39.767434],aa: "1",name: "博兴三路西环路交叉口",text: '博兴三路西环路交叉口' },
    {center: [116.316331,39.780959],aa: "2",name: "南五环李营桥外环",text: '南五环李营桥外环' },
    {center: [116.593463,40.139675],aa: "1",name: "101国道六元桥南北向南南北双向",text: '101国道六元桥南北向南南北双向' },
    {center: [116.552657,40.143538],aa: "1",name: "火寺路张喜庄桥南南北双向",text: '火寺路张喜庄桥南南北双向' },
    {center: [116.649436,40.059496],aa: "1",name: "龙塘路龙苏路桥西东向西",text: '龙塘路龙苏路桥西东向西' },
    {center: [116.342112,39.722271],aa: "2",name: "林校北路与兴政南巷交口东西双向",text: '林校北路与兴政南巷交口东西双向' },
    {center: [116.345781,39.722189],aa: "1",name: "黄马路大兴桥下东向西",text: '黄马路大兴桥下东向西' },
    {center: [116.406983,39.725304],aa: "2",name: "南中轴路与中鼎路交叉口双向",text: '南中轴路与中鼎路交叉口双向' },
    {center: [116.409869,39.721078],aa: "1",name: "黄马路磁各庄桥东东向西",text: '黄马路磁各庄桥东东向西' },
    {center: [116.56885,39.752479],aa: "2",name: "京沪马驹桥北南北双向",text: '京沪马驹桥北南北双向' },
    {center: [116.70173,39.952494],aa: "1",name: "潞苑北大街疃里桥东西双向",text: '潞苑北大街疃里桥东西双向' },
    {center: [116.688763,40.001884],aa: "1",name: "窑平路王辛庄桥西东西双向",text: '窑平路王辛庄桥西东西双向' },
    {center: [116.124327,39.938718],aa: "2",name: "阜石路双峪桥东东西双向",text: '阜石路双峪桥东东西双向' },
    {center: [116.127186,39.939141],aa: "1",name: "双峪路与麻峪东街路口西东西双向",text: '双峪路与麻峪东街路口西东西双向' },
    {center: [116.247606,40.171365],aa: "1",name: "顺沙路百葛桥信号灯路口东向西",text: '顺沙路百葛桥信号灯路口东向西' },
    {center: [116.245498,40.164502],aa: "1",name: "京藏高速西沙桥下南北双向",text: '京藏高速西沙桥下南北双向' },
    {center: [116.48393,40.150752],aa: "2",name: "京承高速酸枣岭桥南过街天桥双向",text: '京承高速酸枣岭桥南过街天桥双向' },
    {center: [116.289304,40.175215],aa: "2",name: "回昌路北六环南口北向南",text: '回昌路北六环南口北向南' },
    {center: [116.644955,40.321285],aa: "1",name: "兴怀大街至开放路交叉路口南北双向",text: '兴怀大街至开放路交叉路口南北双向' },
    {center: [116.329996,39.779904],aa: "1",name: "欣宁街兴华桥下南向北",text: '欣宁街兴华桥下南向北' },
    {center: [116.707113,39.923626],aa: "1",name: "通燕三惠桥下东向西",text: '通燕三惠桥下东向西' },
    {center: [116.70746,39.918517],aa: "1",name: "通胡大街古城西桥西",text: '通胡大街古城西桥西' },
    {center: [116.504765,39.994186],aa: "2",name: "五环路五元桥南双向",text: '五环路五元桥南双向' },
    {center: [116.097064,39.727734],aa: "2",name: "大件路紫草坞桥东东向西",text: '大件路紫草坞桥东东向西' },
    {center: [116.543072,39.92487],aa: "1",name: "五环主路白家楼桥双向",text: '五环主路白家楼桥双向' },
    {center: [116.463182,39.726936],aa: "2",name: "104国道南大红门桥北北向南",text: '104国道南大红门桥北北向南' },
    {center: [116.156157,40.089983],aa: "2",name: "温阳路稻香湖桥南双向",text: '温阳路稻香湖桥南双向' },
    {center: [116.556814,39.746961],aa: "2",name: "马驹桥二号桥南北双向",text: '马驹桥二号桥南北双向' },
    {center: [116.545402,39.747179],aa: "2",name: "漷马路马驹桥一号桥北北向南",text: '漷马路马驹桥一号桥北北向南' },
    {center: [116.2917,39.693444],aa: "2",name: "芦求路罗奇营桥北 南向北",text: '芦求路罗奇营桥北 南向北' },
    {center: [116.63052,40.072908],aa: "2",name: "机场东路吴家营南桥南双向",text: '机场东路吴家营南桥南双向' },
    {center: [116.617282,40.139194],aa: "1",name: "南陈路海洪桥南 南北双向",text: '南陈路海洪桥南 南北双向' },
    {center: [116.622285,40.12889],aa: "1",name: "顺于路迎晨桥西西向东",text: '顺于路迎晨桥西西向东' },
    {center: [116.608398,40.142227],aa: "1",name: "南焦路东杜兰桥 双向",text: '南焦路东杜兰桥 双向' },
    {center: [116.499389,39.81766],aa: "1",name: "五环大羊坊桥西外环",text: '五环大羊坊桥西外环' },
    {center: [116.461683,39.929507],aa: "1",name: "三环长虹桥南过街桥外环",text: '三环长虹桥南过街桥外环' },
    {center: [116.446422,39.846332],aa: "1",name: "成寿寺成仪路东口北北向南",text: '成寿寺成仪路东口北北向南' },
    {center: [116.531662,39.892923],aa: "2",name: "广渠路高碑店污水处理厂门口东向西",text: '广渠路高碑店污水处理厂门口东向西' },
    {center: [116.21755,39.96104],aa: "2",name: "五环主路杏石口北天桥双向（疑似高峰）",text: '五环主路杏石口北天桥双向（疑似高峰）' },
    {center: [116.365576,39.831059],aa: "2",name: "公益西桥西天桥西向东",text: '公益西桥西天桥西向东' },
    {center: [116.411743,39.832279],aa: "1",name: "大红门东桥内环",text: '大红门东桥内环' },
    {center: [116.379951,39.968128],aa: "1",name: "三环马甸桥下外环",text: '三环马甸桥下外环' },
    {center: [116.474241,39.96753],aa: "1",name: "霄云桥北向南",text: '霄云桥北向南' },
    {center: [116.401915,39.968775],aa: "1",name: "三环主路安贞桥西双向",text: '三环主路安贞桥西双向' },
    {center: [116.386909,39.83517],aa: "1",name: "马家堡东路三星庄园路口双向",text: '马家堡东路三星庄园路口双向' },
    {center: [116.310938,39.982486],aa: "1",name: "海淀中街和海淀大街交叉口南向北",text: '海淀中街和海淀大街交叉口南向北' },
    {center: [116.308234,39.980153],aa: "1",name: "彩和坊路和善缘街交叉口北向南",text: '彩和坊路和善缘街交叉口北向南' },
    {center: [116.293822,39.947655],aa: "2",name: "紫竹院路车道沟桥西东西双向",text: '紫竹院路车道沟桥西东西双向' },
    {center: [116.498153,39.923046],aa: "1",name: "十里堡路口西侧东西双向",text: '十里堡路口西侧东西双向' },
    {center: [116.359058,39.942952],aa: "1",name: "桦皮厂胡同南向北",text: '桦皮厂胡同南向北' },
    {center: [116.34903,39.898069],aa: "1",name: "天宁寺桥下东西双向",text: '天宁寺桥下东西双向' },
    {center: [116.373491,39.99702],aa: "2",name: "京藏高速3.050KM北向南",text: '京藏高速3.050KM北向南' },
    {center: [116.398526,39.873067],aa: "1",name: "永定门桥北北向南",text: '永定门桥北北向南' },
    {center: [116.366608,39.822813],aa: "1",name: "公益西桥南第一红绿灯南向北",text: '公益西桥南第一红绿灯南向北' },
    {center: [116.425468,39.948584],aa: "1",name: "小街桥南南向北",text: '小街桥南南向北' },
    {center: [116.408324,39.946911],aa: "1",name: "安定门桥南北向南",text: '安定门桥南北向南' },
    {center: [116.427439,39.858296],aa: "1",name: "三环主路赵公口桥东天桥外环",text: '三环主路赵公口桥东天桥外环' },
    {center: [116.489788,39.884017],aa: "1",name: "四环主路窑洼湖桥北外环",text: '四环主路窑洼湖桥北外环' },
    {center: [116.459092,39.954045],aa: "1",name: "三元东桥南北向南",text: '三元东桥南北向南' },
    {center: [116.364934,39.855294],aa: "1",name: "右安南桥桥下南北双向",text: '右安南桥桥下南北双向' },
    {center: [116.357452,39.967717],aa: "1",name: "蓟门桥东外环东向西",text: '蓟门桥东外环东向西' },
    {center: [116.460721,39.949181],aa: "1",name: "燕莎桥西东西双向",text: '燕莎桥西东西双向' },
    {center: [116.360992,39.965167],aa: "1",name: "师大北路与杏坛路路口南向北",text: '师大北路与杏坛路路口南向北' },
    {center: [116.397925,39.832152],aa: "1",name: "大红门桥内环",text: '大红门桥内环' },
    {center: [116.282613,39.867597],aa: "1",name: "丰北桥北外环",text: '丰北桥北外环' },
    {center: [116.438679,39.859579],aa: "1",name: "方庄桥北南向北",text: '方庄桥北南向北' },
    {center: [116.432103,39.859125],aa: "1",name: "东铁营桥北南北双向",text: '东铁营桥北南北双向' },
    {center: [116.311886,39.872194],aa: "1",name: "西三环丽泽桥北内环",text: '西三环丽泽桥北内环' },
    {center: [116.47211,39.808927],aa: "1",name: "亦庄桥北三台山路口南北双向",text: '亦庄桥北三台山路口南北双向' },
    {center: [116.394261,39.857673],aa: "1",name: "西罗园路口南南北双向",text: '西罗园路口南南北双向' },
    {center: [116.378315,39.85742],aa: "1",name: "万芳亭公园东路南口南北双向",text: '万芳亭公园东路南口南北双向' },
    {center: [116.317781,40.016463],aa: "1",name: "厢白旗桥南向北通往体大的小路上",text: '厢白旗桥南向北通往体大的小路上' },
    {center: [116.287739,40.011045],aa: "2",name: "万泉河快速路肖家河桥南主路南向北",text: '万泉河快速路肖家河桥南主路南向北' },
    {center: [116.31024,39.904676],aa: "1",name: "西三环新兴桥南内环",text: '西三环新兴桥南内环' },
    {center: [116.316355,39.858549],aa: "1",name: "西三环丰益桥北内环",text: '西三环丰益桥北内环' },
    {center: [116.444338,39.858895],aa: "2",name: "方庄桥东过街桥内环（含辅路）",text: '方庄桥东过街桥内环（含辅路）' },
    {center: [116.449977,39.953701],aa: "1",name: "机场高速三元桥南天桥双向",text: '机场高速三元桥南天桥双向' },
    {center: [116.297306,39.828982],aa: "1",name: "丰科路北口南向北",text: '丰科路北口南向北' },
    {center: [116.428524,39.845918],aa: "1",name: "石榴庄路与宋庄路交叉口西向东",text: '石榴庄路与宋庄路交叉口西向东' },
    {center: [116.511803,39.822745],aa: "1",name: "大羊坊路五环内路口南北双向",text: '大羊坊路五环内路口南北双向' },
    {center: [116.283419,39.851513],aa: "1",name: "丰台大桥北内环",text: '丰台大桥北内环' },
    {center: [116.394668,39.967567],aa: "1",name: "安华桥南南北双向",text: '安华桥南南北双向' },
    {center: [116.461158,39.913476],aa: "1",name: "光华桥西东西双向",text: '光华桥西东西双向' },
    {center: [116.334456,39.964607],aa: "1",name: "联想桥南天桥南北双向",text: '联想桥南天桥南北双向' },
    {center: [116.400537,40.011392],aa: "2",name: "奥林东路南天桥南北双向",text: '奥林东路南天桥南北双向' },
    {center: [116.538317,39.909421],aa: "1",name: "远通桥西天桥东西双向",text: '远通桥西天桥东西双向' },
    {center: [116.468457,39.951414],aa: "1",name: "亮马桥路与麦子店街交汇处西东向西",text: '亮马桥路与麦子店街交汇处西东向西' },
    {center: [116.459295,39.884422],aa: "1",name: "劲松桥西东西双向",text: '劲松桥西东西双向' },
    {center: [116.355019,39.961661],aa: "1",name: "蓟门桥南东侧天桥南向北",text: '蓟门桥南东侧天桥南向北' },
    {center: [116.462754,39.833724],aa: "1",name: "四环主路小红门桥东西向东",text: '四环主路小红门桥东西向东' },
    {center: [116.414182,39.857576],aa: "1",name: "赵公口桥北南北双向",text: '赵公口桥北南北双向' },
    {center: [116.437404,39.963292],aa: "1",name: "西坝河南路双向",text: '西坝河南路双向' },
    {center: [116.364258,39.869699],aa: "1",name: "右安门桥下南北双向",text: '右安门桥下南北双向' },
    {center: [116.348708,39.892908],aa: "1",name: "天宁寺桥南南北双向",text: '天宁寺桥南南北双向' },
    {center: [116.331718,39.967487],aa: "1",name: "联想桥西主辅路双向",text: '联想桥西主辅路双向' },
    {center: [116.425655,39.783899],aa: "1",name: "德茂桥西双向",text: '德茂桥西双向' },
    {center: [116.346844,39.85369],aa: "1",name: "京开高速玉泉营桥北南北双向",text: '京开高速玉泉营桥北南北双向' },
    {center: [116.424856,39.968564],aa: "1",name: "和平东桥南南北双向",text: '和平东桥南南北双向' },
    {center: [116.310815,39.928116],aa: "1",name: "增光路西口东东西双向",text: '增光路西口东东西双向' },
    {center: [116.401733,39.765929],aa: "1",name: "志远西桥北三方向都拍",text: '志远西桥北三方向都拍' },
    {center: [116.451948,39.792371],aa: "1",name: "旧忠桥北南北双向",text: '旧忠桥北南北双向' },
    {center: [116.38677,39.857816],aa: "1",name: "洋桥北南北双向",text: '洋桥北南北双向' },
    {center: [116.442041,39.884511],aa: "1",name: "光明桥西东西双向",text: '光明桥西东西双向' },
    {center: [116.313819,39.789134],aa: "1",name: "京良路和樊羊路路口东西双向",text: '京良路和樊羊路路口东西双向' },
    {center: [116.490909,39.81614],aa: "1",name: "荣华桥北南北双向",text: '荣华桥北南北双向' },
    {center: [116.524209,39.835194],aa: "1",name: "康化桥西东西双向",text: '康化桥西东西双向' },
    {center: [116.257262,40.001788],aa: "1",name: "功德寺桥南南北双向",text: '功德寺桥南南北双向' },
    {center: [116.500287,39.822859],aa: "1",name: "京沪大羊坊桥西双向",text: '京沪大羊坊桥西双向' },
    {center: [116.387763,39.872411],aa: "1",name: "陶然桥北南北双向",text: '陶然桥北南北双向' },
    {center: [116.539767,39.91624],aa: "2",name: "大黄庄桥西双向",text: '大黄庄桥西双向' },
    {center: [116.374527,39.771392],aa: "1",name: "金西桥东西向东",text: '金西桥东西向东' },
    {center: [116.442245,39.893779],aa: "1",name: "广渠门桥西东西双向",text: '广渠门桥西东西双向' },
    {center: [116.212513,39.903874],aa: "1",name: "鲁谷桥东东西双向",text: '鲁谷桥东东西双向' },
    {center: [116.407758,39.96551],aa: "1",name: "安贞桥南天桥南北双向",text: '安贞桥南天桥南北双向' },
    {center: [116.384357,40.020722],aa: "2",name: "奥林西桥南南北双向",text: '奥林西桥南南北双向' },
    {center: [116.417938,39.969789],aa: "1",name: "和平西桥北南向北",text: '和平西桥北南向北' },
    {center: [116.45879,39.876204],aa: "1",name: "潘家园桥西东西双向",text: '潘家园桥西东西双向' },
    {center: [116.541634,39.846929],aa: "1",name: "化工桥西大鲁店北路双向",text: '化工桥西大鲁店北路双向' },
    {center: [116.514558,39.907916],aa: "1",name: "京通快速四惠东双向",text: '京通快速四惠东双向' },
    {center: [116.358823,39.932395],aa: "1",name: "官园桥东天桥东西双向",text: '官园桥东天桥东西双向' },
    {center: [116.467259,40.013751],aa: "2",name: "广顺桥南南北双向",text: '广顺桥南南北双向' },
    {center: [116.235406,39.851079],aa: "1",name: "京石大瓦窑桥西双向",text: '京石大瓦窑桥西双向' },
    {center: [116.421515,39.869018],aa: "1",name: "玉蜓桥南南向北",text: '玉蜓桥南南向北' },
    {center: [116.54794,39.882824],aa: "1",name: "观音堂桥西东西双向",text: '观音堂桥西东西双向' },
    {center: [116.212208,39.910659],aa: "1",name: "老山南路西东西双向",text: '老山南路西东西双向' },
    {center: [116.212625,39.900526],aa: "1",name: "鲁谷南路新华社门口东西双向",text: '鲁谷南路新华社门口东西双向' },
    {center: [116.222774,39.896958],aa: "1",name: "衙门口桥东天桥东西双向",text: '衙门口桥东天桥东西双向' },
    {center: [116.274343,40.003593],aa: "1",name: "颐和园路颐和园北宫门南北双向",text: '颐和园路颐和园北宫门南北双向' },
    {center: [116.269645,40.005506],aa: "2",name: "红山桥下东向西",text: '红山桥下东向西' },
    {center: [116.224278,39.992634],aa: "1",name: "玉泉山路香泉环岛东",text: '玉泉山路香泉环岛东' },
    {center: [116.223781,39.98995],aa: "1",name: "旱河路香泉环岛南双向",text: '旱河路香泉环岛南双向' },
    {center: [116.227076,39.973129],aa: "2",name: "闵西桥东东西双向",text: '闵西桥东东西双向' },
    {center: [116.222132,39.954976],aa: "1",name: "杏石口桥东东西双向",text: '杏石口桥东东西双向' },
    {center: [116.215711,39.933391],aa: "2",name: "西黄村桥东东西双向",text: '西黄村桥东东西双向' },
    {center: [116.212869,39.916962],aa: "1",name: "五景桥东东西双向",text: '五景桥东东西双向' },
    {center: [116.525999,39.964008],aa: "1",name: "七棵树路五环路西东向西",text: '七棵树路五环路西东向西' },
    {center: [116.401219,39.833693],aa: "1",name: "大红门桥南北双向",text: '大红门桥南北双向' },
    {center: [116.219271,39.924689],aa: "1",name: "晋元桥东天桥东西双向",text: '晋元桥东天桥东西双向' },
    {center: [116.430435,39.924494],aa: "1",name: "朝阳门桥西东西双向",text: '朝阳门桥西东西双向' },
    {center: [116.370228,39.967067],aa: "1",name: "北太平桥南天桥南北双向",text: '北太平桥南天桥南北双向' },
    {center: [116.310024,39.956907],aa: "1",name: "为公桥东公交站东西双向",text: '为公桥东公交站东西双向' },
    {center: [116.444432,39.960599],aa: "1",name: "三元西桥南老国展门前双向",text: '三元西桥南老国展门前双向' },
    {center: [116.450084,39.955665],aa: "1",name: "三元桥南天桥南北双向",text: '三元桥南天桥南北双向' },
    {center: [116.430956,39.933749],aa: "1",name: "南新仓天桥东西双向",text: '南新仓天桥东西双向' },
    {center: [116.371931,39.949623],aa: "1",name: "积水坛桥南双向",text: '积水坛桥南双向' },
    {center: [116.389467,39.900275],aa: "1",name: "前门西大街西向东",text: '前门西大街西向东' },
    {center: [116.315321,39.93246],aa: "1",name: "花园桥东天桥东向西",text: '花园桥东天桥东向西' },
    {center: [116.214164,39.907412],aa: "2",name: "八角桥东天桥东西双向",text: '八角桥东天桥东西双向' },
    {center: [116.430641,39.900754],aa: "1",name: "东便门桥西天桥东西双向",text: '东便门桥西天桥东西双向' },
    {center: [116.363438,39.899447],aa: "1",name: "宣武门西大街与长椿街路口西向东",text: '宣武门西大街与长椿街路口西向东' },
    {center: [116.432804,39.944612],aa: "1",name: "民安街东直门中学门口东西双向",text: '民安街东直门中学门口东西双向' },
    {center: [116.514017,39.975319],aa: "1",name: "环铁桥西雍家村大门西东西双向",text: '环铁桥西雍家村大门西东西双向' },
    {center: [116.528512,39.958603],aa: "1",name: "七棵树桥西东西双向",text: '七棵树桥西东西双向' },
    {center: [116.374371,39.873736],aa: "1",name: "开阳桥北天桥北向南",text: '开阳桥北天桥北向南' },
    {center: [116.416574,39.948974],aa: "1",name: "雍和宫桥南南北双向",text: '雍和宫桥南南北双向' },
    {center: [116.347711,40.021012],aa: "1",name: "双清路北培黎职业学院南北双向",text: '双清路北培黎职业学院南北双向' },
    {center: [116.351749,40.021706],aa: "1",name: "学清路北口南北双向",text: '学清路北口南北双向' },
    {center: [116.350943,40.022553],aa: "1",name: "双清路北口东向西",text: '双清路北口东向西' },
    {center: [116.353971,39.873068],aa: "1",name: "大观园西门附近南向北",text: '大观园西门附近南向北' },
    {center: [116.317507,40.016653],aa: "2",name: "厢白旗桥南南北双向",text: '厢白旗桥南南北双向' },
    {center: [116.349342,39.877585],aa: "1",name: "白纸坊桥下东西双向",text: '白纸坊桥下东西双向' },
    {center: [116.31476,39.940434],aa: "1",name: "紫竹桥东天桥东西双向",text: '紫竹桥东天桥东西双向' },
    {center: [116.322761,39.960925],aa: "1",name: "四通桥南天桥南北双向",text: '四通桥南天桥南北双向' },
    {center: [116.541941,39.923424],aa: "2",name: "白家楼桥西东西双向",text: '白家楼桥西东西双向' },
    {center: [116.408451,40.020972],aa: "2",name: "仰山桥南南北双向",text: '仰山桥南南北双向' },
    {center: [116.43363,39.936703],aa: "1",name: "海运仓胡同东口东西双向",text: '海运仓胡同东口东西双向' },
    {center: [116.543277,39.869188],aa: "1",name: "京哈五方桥西东西双向",text: '京哈五方桥西东西双向' },
    {center: [116.357763,40.017804],aa: "1",name: "京藏高速上清桥南天桥南北双向（包括辅路）",text: '京藏高速上清桥南天桥南北双向（包括辅路）' },
    {center: [116.416863,40.015443],aa: "2",name: "北苑路康斯丹郡南北双向",text: '北苑路康斯丹郡南北双向' },
    {center: [116.374476,40.020312],aa: "2",name: "林萃桥南南北双向",text: '林萃桥南南北双向' , 
]