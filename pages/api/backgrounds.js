// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const BACKGROUNDS = [
  {
    location: '',
    url: ''
  },

]

export default function handler(req, res) {
  const randomIndex = Math.round(Math.random()*58) // TODO: switch 58 to BACKGROUNDS.length
  const url = `https://kitdesai.s3.amazonaws.com/panoramas/IMG_${randomIndex}.jpg`
  res.status(200).json(url)
}
