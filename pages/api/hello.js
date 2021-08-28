// can be deployed as serverless functions (lambdas)

// req instance of http.IncomingMessage
// res instance of http.ServerResponse

export default function handler(req, res) {
  res.status(200).json({ text: 'Hello' })
}
