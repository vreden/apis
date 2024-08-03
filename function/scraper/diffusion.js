const fetch = require("node-fetch");

async function animedif(data) {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/Ojimi/anime-kawai-diffusion",
    {
      headers: { Authorization: "Bearer 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" },
      method: "POST",
      body: JSON.stringify(data),
    }
  )
  const result = await response.blob();
  let arrayBuffer = await result.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer, 'base64')
  return buffer
}
async function animedif2(data) {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/stablediffusionapi/anime-model-v2",
    {
      headers: { Authorization: "Bearer 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" },
      method: "POST",
      body: JSON.stringify(data),
    }
  )
  const result = await response.blob();
  let arrayBuffer = await result.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer, 'base64')
  return buffer
}
async function animedif3(data) {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/digiplay/CoffeeMix_v2",
    {
      headers: { Authorization: "Bearer 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" },
      method: "POST",
      body: JSON.stringify(data),
    }
  )
  const result = await response.blob();
  let arrayBuffer = await result.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer, 'base64')
  return buffer
}
async function stabledif(data) {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/stablediffusionapi/lyrielv16",
    {
      headers: { Authorization: "Bearer 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" },
      method: "POST",
      body: JSON.stringify(data),
    }
  )
  const result = await response.blob();
  let arrayBuffer = await result.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer, 'base64')
  return buffer
}
async function stabledif2(data) {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/stablediffusionapi/dreamshaper-v6",
    {
      headers: { Authorization: "Bearer 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" },
      method: "POST",
      body: JSON.stringify(data),
    }
  )
  const result = await response.blob();
  let arrayBuffer = await result.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer, 'base64')
  return buffer
}
async function text2img(data) {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/Yntec/Ninja-Diffusers",
    {
      headers: { Authorization: "Bearer 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" },
      method: "POST",
      body: JSON.stringify(data),
    }
  )
  const result = await response.blob();
  let arrayBuffer = await result.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer, 'base64')
  return buffer
}

async function txt2img(params) {
try {
const url = 'https://api.prodia.com/v1/sd/generate';
const options = {
  method: 'POST',
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
    'X-Prodia-Key': '5113d4e5-6574-4115-bdd0-e02b5d7cfb87'
  },
  body: JSON.stringify(params)
};

const res = await fetch(url, options)
const respon = await res.json()
return respon
} catch (error) {
return error
}
}

async function listModels() {
try {
const url = 'https://api.prodia.com/v1/sd/models';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    'X-Prodia-Key': 'dc80a8a4-0b98-4d54-b3e4-b7c797bc2527'
  }
};

const res = await fetch(url, options)
const respon = await res.json()
return respon
} catch (error) {
return error
}
}

async function listSampler() {
try {
const url = 'https://api.prodia.com/v1/sd/samplers';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    'X-Prodia-Key': 'dc80a8a4-0b98-4d54-b3e4-b7c797bc2527'
  }
};

const res = await fetch(url, options)
const respon = await res.json()
return respon
} catch (error) {
return error
}
}

async function getModels() {
    try {
        const response = await fetch('https://docs.prodia.com/reference/transform');
        const html = await response.text();
        const jsonRegex = /{&quot;[^{}]*}/g;
        const allJSON = html.match(jsonRegex)?.map(match => JSON.parse(match.replace(/&quot;/g, '"'))) || [];
        const data = allJSON.filter(obj => obj.enum !== undefined);
        return data;
    } catch (error) {
        throw new Error('Error fetching or filtering JSON:', error);
    }
}

async function getJobs(id) {
try {
const url = 'https://api.prodia.com/v1/job/' + id
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    'X-Prodia-Key': 'dc80a8a4-0b98-4d54-b3e4-b7c797bc2527'
  }
};

const res = await fetch(url, options)
const respon = await res.json()
return respon
} catch (error) {
return error
}
}

module.exports = {
  animedif,
  animedif2,
  animedif3,
  stabledif,
  stabledif2,
  text2img,
  txt2img,
  listModels,
  listSampler,
  getModels,
  getJobs
}