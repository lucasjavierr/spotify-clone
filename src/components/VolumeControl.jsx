import { useRef } from 'react';
import { usePlayerStore } from '@/store/playerStore';
import { Volume, VolumeSilence } from './Player';
import { Slider } from './Slider';

export const VolumeControl = () => {
  const volume = usePlayerStore(state => state.volume)
  const setVolume = usePlayerStore(state => state.setVolume)
  const previusVolumeRef = useRef(volume)

  const isVolumeSilenced = volume < 0.1

  const handleClickVolume = () => {
    if (isVolumeSilenced) {
      setVolume(previusVolumeRef.current)
    } else {
      previusVolumeRef.current = volume
      setVolume(0)
    }
  }

  return (
    <div className='flex justify-center gap-x-2 text-white w-200'>
      <button className='opacity-70 hover:opacity-100' onClick={handleClickVolume}>
        { isVolumeSilenced ? <VolumeSilence /> : <Volume /> }
      </button>

      <Slider
        defaultValue={[100]}
        max={100}
        min={0}
        value={[volume * 100]}
        className="w-[95px]"
        onValueChange={(value) => {
          const [newVolume] = value
          const volumeValue = newVolume / 100
          setVolume(volumeValue)
        }}
      />
    </div>
  )
}