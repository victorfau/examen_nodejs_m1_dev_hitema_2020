const crypto = require('crypto');

function sha1Encode(data) {
    // To be implemented!
    let sha1Encode = crypto.createHash('sha1')
    sha1Encode.update(data)
    return sha1Encode.digest('hex')
}


module.exports.digestAuth = (request, response, next) => {
    const authorization = request.headers.authorization;  // 'Basic xxxx'
    const encoded = authorization.replace('Basic ', '');
    // https://nodejs.org/docs/latest-v12.x/api/buffer.html
    const decoded = Buffer.from(encoded, 'base64').toString('utf8');
    // 'user:paswword'
    const authentication = decoded.split(':');

    // si user = user & password=password, ok
    const isValid = authentication[0] === 'node'
        && authentication[1] === sha1Encode('password');

    // si pas authentifié
    isValid ? next() : response.sendStatus(401);
};
