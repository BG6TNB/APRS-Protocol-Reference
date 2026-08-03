## 使用 JSON 进行基本位置查询：

为提高可读性，响应中添加了空格和缩进。

时间戳采用 Unix 时间格式。所有其他变量均采用公制单位（如适用）。速度以公里/小时为单位，海拔以米为单位，温度以摄氏度为单位。纬度和经度以十进制度数表示，北纬和东经为正值。响应仅包含已知数据的键。

请注意，此 API 用于查询特定基站，不支持通配符搜索。

https://api.aprs.fi/api/get?name=OH7RDA&what=loc&apikey=APIKEY&format=json

```json
{
    "command":"get",
    "result":"ok",
    "what":"loc",
    "found":1,
    "entries": [
        {
            "name":"OH7RDA",
            "type":"l",
            "time":"1267445689",
            "lasttime":"1270580127",
            "lat":"63.06717",
            "lng":"27.66050",
            "symbol":"\\/#",
            "srccall":"OH7RDA",
            "dstcall":"APND12",
            "phg":"44603",
            "comment":"\\/R,W,Wn,Tn Siilinjarvi",
            "path":"WIDE2-2,qAR,OH7AA"
        }
    ]
}
```

## 常用字段说明：

- **command** - 调用的 API 命令
- **what** - 查询的内容类型
- **result** - 查询结果，ok 或 fail
- **found** - 返回的条目数量

## 位置记录字段说明：

- **class** - 基站标识符类别（a: APRS, i: AIS, w: Web 等）
- **name** - 基站、对象、项目或船舶名称
- **showname** - 显示的基站名称（可能与唯一名称不同）
- **type** - 目标类型：a 为 AIS，l 为 APRS 基站，i 为 APRS 项目，o 为 APRS 对象，w 为气象站
- **time** - 目标首次报告此（当前）位置的时间
- **lasttime** - 基站最后一次报告此（当前）位置的时间
- **lat** - 纬度（十进制度数，北纬为正）
- **lng** - 经度（十进制度数，东经为正）
- **course** - 地面航迹角（度）
- **speed** - 速度（公里/小时）
- **altitude** - 海拔高度（米）
- **symbol** - APRS 符号表和代码
- **srccall** - 源呼号 - APRS 源呼号或 AIS 船舶呼号
- **dstcall** - APRS 数据包目的呼号
- **comment** - APRS 注释或 AIS 目的地及预计到达时间
- **path** - APRS 或 AIS 数据包路径
- **phg** - APRS PHG 值
- **status** - 基站发送的最后一条状态消息
- **status_lasttime** - 接收最后一条状态消息的时间

## 使用 XML 进行基本位置查询：

https://api.aprs.fi/api/get?name=OH7RDA&what=loc&apikey=APIKEY&format=xml

```xml
<?xml version="1.0" encoding="utf-8"?>
<xml>
<command>get</command>
<result>ok</result>
<what>loc</what>
<found>1</found>
<entries>
    <entry>
        <name>OH7RDA</name>
        <type>l</type>
        <time>1267445689</time>
        <lasttime>1270580127</lasttime>
        <lat>63.06717</lat>
        <lng>27.66050</lng>
        <symbol>/#</symbol>
        <srccall>OH7RDA</srccall>
        <dstcall>APND12</dstcall>
        <phg>44603</phg>
        <comment>/R,W,Wn,Tn Siilinjarvi</comment>
        <path>WIDE2-2,qAR,OH7AA</path>
    </entry>
</entries>
</xml>
```

## 单次请求查询多个目标：

通过使用逗号分隔呼号，最多可查询 20 个目标。速率限制是限制 API 查询次数，而不是查询的目标数量。批量查询多个基站更快，且对服务器压力更小。

https://api.aprs.fi/api/get?name=OH7RDA,OH7AA&what=loc&apikey=APIKEY&format=json

```json
{
    "command":"get",
    "result":"ok",
    "what":"loc",
    "found":2,
    "entries": [
        {
            "name":"OH7RDA",
            "...": "其他数据..."
        },
        {
            "name":"OH7AA",
            "...": "其他数据..."
        }
    ]
}
```

## 查询气象数据：

所有数据均以公制格式返回：温度为摄氏度，风速为米/秒。可通过逗号分隔呼号来查询多个气象站。

https://api.aprs.fi/api/get?name=OH2TI&what=wx&apikey=APIKEY&format=json

```json
{
    "command":"get",
    "result":"ok",
    "what":"wx",
    "found":1,
    "entries": [
        {
            "name":"OH2TI",
            "time":"1270580978",
            "temp":"2.8",
            "pressure":"1022.1",
            "humidity":"88",
            "wind_direction":"270",
            "wind_speed":"2.7"
        }
    ]
}
```

## 气象数据字段：

- **temp** - 温度（摄氏度）
- **time** - 最后一次天气报告的时间
- **pressure** - 大气压（毫巴，mbar）
- **humidity** - 相对湿度（%）
- **wind_direction** - 平均风向
- **wind_speed** - 平均风速（米/秒）
- **wind_gust** - 阵风（米/秒）
- **rain_1h** - 过去 1 小时降雨量（毫米）
- **rain_24h** - 过去 24 小时降雨量（毫米）
- **rain_mn** - 自午夜以来降雨量（毫米）
- **luminosity** - 光照度（瓦/平方米）

## 查询文本消息：

此 API 调用返回指定接收方最多 10 条最新 APRS 消息。单次调用最多可查询 10 个接收方，用逗号分隔。返回的消息 ID 可用于检查自上次调用以来是否收到新消息。

https://api.aprs.fi/api/get?what=msg&dst=OH2TI&apikey=APIKEY&format=json

```json
{
    "command":"get",
    "result":"ok",
    "found":2,
    "what":"msg",
    "entries": [
        {
            "messageid":"1271366",
            "time":"1272453795",
            "srccall":"OH5KUY-4",
            "dst":"OH2TI",
            "message":"foo bar"
        },
        {
            "messageid":"1271368",
            "time":"1272454795",
            "srccall":"OH5KUY-4",
            "dst":"OH2TI",
            "message":"bar foo"
        }
    ]
}
```

## 消息字段：

- **messageid** - 递增的消息 ID（某天会回绕到 0）
- **time** - 消息接收时间
- **srccall** - 源呼号
- **dst** - APRS 消息目的地
- **message** - 消息内容

## 错误报告：

当请求失败时，result 设置为 fail，并在 description 中返回人类可读的错误信息。请确保您的应用程序优雅地处理错误，将错误报告给用户，并写入日志文件以便稍后检查。aprs.fi 在日志文件中使用 UTC 时间。

https://api.aprs.fi/api/get?name=OH2TI&what=wx&apikey=WRONGAPIKEY&format=json

```json
{
    "command":"get",
    "result":"fail",
    "description":"authentication failed: wrong API key"
}
```
