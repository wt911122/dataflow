export const data = {
    nodes: [
        {
            type: 'String',
            name: 'a',
            value: '',
            position: [20, 0]
        },
        {
            type: 'API',
            name: 'getProvinces',
            URL: 'http://nmc.cn/rest/province',
            position: [200, 200]
        },
        {
            type: 'Function',
            name: 'getCityCode',
            expression: `async ({ province }) => {
                const res = await fetch('http://nmc.cn/rest/province/'+ province);
                const citys = await res.json();
                return citys
            }`,
            position: [200, 0]
        },
        {
            type: 'Function',
            name: 'getWeather',
            expression: `async ({ stationid }) => {
                const res = await fetch('http://nmc.cn/rest/weather?stationid='+ stationid);
                const weather = await res.json();
                return weather
            }`,
            position: [400, 0]
        }
    ],
    links:[]
}