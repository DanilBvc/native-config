import { type FC, useRef } from 'react';
import Video, { type VideoRef } from 'react-native-video';

interface Props {
  locale: string;
}

export const VideoPlayer: FC<Props> = ({ locale }) => {
  const videoRef = useRef<VideoRef>(null);

  return (
    <Video
      source={{ uri: locale }}
      ref={videoRef}
      style={{ width: '100%', height: 200 }}
      muted
      repeat
      resizeMode="contain"
      controls={false}
      paused={true}
    />
  );
};
