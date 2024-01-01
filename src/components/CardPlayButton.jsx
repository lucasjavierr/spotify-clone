import { Play, Pause } from '@/components/Player'
import { usePlayerStore } from '@/store/playerStore'

export function CardPlayButton ({ id, size = 'small' }) {
  const { 
    isPlaying,
    currentMusic,
    setIsPlaying,
    setCurrentMusic
  } = usePlayerStore(state => state)
  
  const isPlayingPlaylist = isPlaying && currentMusic?.playlist.id === id

  const handleClikc = async () => {
    if (isPlayingPlaylist) {
      setIsPlaying(false)
      return
    }

    // promesas
    /* fetch(`/api/get-info-playlist.json?id=${id}`)
      .then(res => res.json())
      .then((data => {
        const { songs, playlist } = data
        setIsPlaying(true)
        setCurrentMusic({ songs, playlist, song: songs[0] })
      })) */

    // async - await
    const res = await fetch(`/api/get-info-playlist.json?id=${id}`)
    const data = await res.json()
    const { songs, playlist } = data
    setIsPlaying(true)
    setCurrentMusic({ songs, playlist, song: songs[0] })
  }

  const iconClassName = size === 'small' ? 'w-4 h-4' : 'w-5 h-5'


  return (
    <button onClick={handleClikc} className='card-play-button rounded-full bg-green-500 p-3 hover:scale-105 transition hover:bg-green-400'>
      { isPlayingPlaylist ? <Pause className={iconClassName} /> : <Play className={iconClassName} /> }
    </button>
  )
}