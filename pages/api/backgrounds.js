// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const BACKGROUNDS = [
  {
    location: '',
    url: ''
  },

]

export default function handler(req, res) {
  res.status(200).json(BACKGROUNDS)
}
