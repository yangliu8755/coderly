import request from '../request.js'

export function getShowMessage(type,page){
     return request({
          type,
          page
     })

}