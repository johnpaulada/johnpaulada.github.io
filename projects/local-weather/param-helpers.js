const _decorateParam = (url, key, value) => `${url}${url.includes('?') ? '&' : '?'}${key}=${value}`
const _makeParameterAdder = (param) => (url, value) => _decorateParam(url, param, value)
const _buildParamsList = (params) => Object.entries(params).map(([param, value]) => [_makeParameterAdder(param), value])
const _buildURL = (url, params) => _buildParamsList(params).reduce((url, [param, value]) => param(url, value), url)
const ParamHelpers = {
  buildURL: _buildURL
}
