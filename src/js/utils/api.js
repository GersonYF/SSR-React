import "babel-polyfill";
import APIRoutes from "./apiRoutes";
import { GLOBAL_STRS } from "./strings";

const JSON_RQ = "json";
const XML_RQ = "xml";

export default class API {
  static home() {
    return APIRoutes.home;
  }

  static headers() {
    return {
      Accept: "application/json",
      "Content-Type": "application/json",
      dataType: "json"
    };
  }

  static async postQL(route, params, token) {
    return await this.graqhQl(route, params, "POST", token);
  }

  static async get(route, params, token) {
    return await this.xhr(route, null, "GET", token, JSON_RQ);
  }

  static async put(route, params, token) {
    return await this.xhr(route, params, "PUT", token, JSON_RQ);
  }

  static async post(route, params, token) {
    return await this.xhr(route, params, "POST", token, JSON_RQ);
  }

  static async delete(route, params, token) {
    return await this.xhr(route, params, "DELETE", token, JSON_RQ);
  }

  static async xhr(route, params, verb, token, type) {
    const home = this.home();
    const url = `${home}${route}`;
    let _headers = new Headers();

    if (token) _headers.append("Authorization", "Token " + token);
    if (type === XML_RQ) {
      _headers.append("Content-Type", "application/xml");
    } else {
      _headers.append("Content-Type", "application/json");
    }

    let _init = {
      method: verb,
      headers: _headers,
      mode: "cors",
      cache: "default"
    };

    let _request = new Request(url, _init);

    try {
      let response = await fetch(_request);
      let data = await response.json();
      return data;
    } catch (err) {
      return {
        status: GLOBAL_STRS.error_status,
        msg: err
      };
    }
  }

  static async graqhQl(route, params, verb, token) {
    return await this.xhr(route, params, verb, token, JSON_RQ);
  }

  static async SOAP(route, params, verb, token) {
    return await this.xhr(route, params, verb, token, XML_RQ);
  }
}
