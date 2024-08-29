import mongoose from "mongoose"


export const likeVideo = async (req, res) => {
  const { id } = req.params

  if (!req.userId) {
    return res.json({ message: "Unauthenticated" })
  }

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`No video with id: ${id} found`)
  }

  // Retrieve video from mongodb

  // TODO convert to check user's personal like list. remember to update schema for it too
  const index = video.likes.findIndex((id) => id == String(req.userId))
  if (index == -1) {
    // Liking a video
    video.likes.push(req.userId)
  } else {
    // liked before, now dislike
    video.likes = video.likes.filter((id) => id != String(req.userId))
  }

  const updatedVideo = await videoModel.findByIdAndUpdate(id, video, { new: true })

  res.json(updatedVideo)
}