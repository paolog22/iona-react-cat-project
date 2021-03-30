/****************************************************/
// Created: Paolo 
// description: use api.js to execute http calls. this file acts as api caller
/****************************************************/

import { execute } from './api'

const toQueryString = (obj) => {
    return new URLSearchParams(obj).toString()
}

export const getBreed = async () => {
    return await execute('/breeds')
}

/**
 * 
 * @param {string} breedId cat breedid
 * @param {number} page star of page
 * @param {number} limit limit of item per page
 * @returns {Array}
 */
export const searchByBreed = async (breedId, page, limit = 10) => {
    const query = toQueryString({
        page,
        limit,
        breed_id: breedId
    })

    return await execute(`/images/search?${query}`)
}

/**
 * 
 * @param {string} breedId cat breedid
 * @returns {Object}
 */
 export const getCatByBreed = async (breedId) => {
    return await execute(`/images/${breedId}`)
}