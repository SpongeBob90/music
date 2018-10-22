export const commonParams = {
  g_tk: 5381,
  inCharset: 'utf-8',
  outCharset: 'utf-8',
  notice: 0,
  format: 'jsonp'
}

export const options = {
  param: 'jsonpCallback'
}

// PC端的回掉函数
export const optionsPc = {
  // 通过qq得到了回掉函数的参数名
  param: 'callback'
}

export const ERR_OK = 0
