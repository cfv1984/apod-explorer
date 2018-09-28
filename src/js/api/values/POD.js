export default class POD {
    copyright       = null;
    date            = null;
    explanation     = null;
    media_type      = null;
    title           = null;
    _hdurl          = null;
    _url            = null;

    constructor({copyright, date, explanation, media_type, service_cversion, title, hdurl, url}) {
        this.copyright        = copyright;
        this.date             = date;
        this.explanation      = explanation;
        this.media_type       = media_type;
        this.title            = title;
        this._hdurl           = hdurl;
        this._url             = url;
    }

    url = (hd = false) => {
        let selected;
        if (!this._hdurl) {
            selected = this._url;
        }
        if (hd) {
            selected = this._hdurl;
        }
        else {
            selected = this._url;
        }

        return selected;
    };
}
