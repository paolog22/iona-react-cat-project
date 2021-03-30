/****************************************************/
// Created: Paolo 
// description: http abstraction for easily change 
// to axios or other http plugins
/****************************************************/

const apiKey = '7fb31983-d156-4db7-9c1a-39555dcf5ece'
const apiHost = 'https://api.thecatapi.com'


const init = (data, method) => {
    let ini = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': apiKey
        }
    }

    if (method !== 'GET') {
        ini['body'] = JSON.stringify(data)
    }

    return ini
}

export const execute = async (url, data = {}, method = 'GET') => {
    const option = init(data, method)

    return await fetch(`${apiHost}/v1${url}`, option).then(response => response.json())
}