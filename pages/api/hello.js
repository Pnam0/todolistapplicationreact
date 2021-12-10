// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// Server environment -> NODE.js


export default function handler(req, res) {
 // Calls to your API services
  res.status(200).json({ name: 'John Doe' })
}
