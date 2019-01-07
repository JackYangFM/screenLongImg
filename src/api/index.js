import request from '@/utils/request'

export async function getData (params) {
  return request('/h5/v5/get_msg', {
    body: {
      data: params
    }
  })
}
