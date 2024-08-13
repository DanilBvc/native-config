import React, { type ReactNode, type FC } from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { type SlotType, type Cords, type Album } from '../../../static/types/tree/types';
import { styles } from './glowingSlot.style';
import glowingCircleBig from '../../../assets/glowingCircleBig.png';
import glowingCircle from '../../../assets/glowingCircle.png';
import { PlusWithCircle } from '../../../assets/icons/PlusIcon';
import Video from 'react-native-video';
import VideoIcon from '../../../assets/video.png';
import AudioIcon from '../../../assets/audio.png';

const GlowingSlot: FC<{
  url?: string;
  cords: Cords;
  component?: ReactNode;
  handleOpenSlotWindow?: () => void;
  onPress?: () => void;
  editTree?: boolean;
  musicPlaying?: boolean;
  previewTree?: boolean;
  activeSlot?: null | (Partial<SlotType> & Cords);
  index?: number;
  albums?: Album[];
}> = ({
  url,
  cords,
  component,
  handleOpenSlotWindow,
  editTree,
  activeSlot,
  onPress,
  albums,
  index,
  musicPlaying
}) => {
  const { width, height, x, y } = cords;
  const imageSource = typeof url === 'string' ? { uri: url } : url;
  const glowImage = height > 100 && width > 100 ? glowingCircleBig : glowingCircle;
  const isSlotIncludeAlbum = albums?.find((album) => album.index === index)?.album_title;
  const textStyle = {
    zIndex: 10,
    top: cords.slot_type === 'VIDEO' ? 0 : 50,
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, { width, height, top: y, left: x }]}
    >
      <Image source={glowImage} style={styles.glow} height={height} width={width} />
      {component && <View style={{ ...styles.photo, width, height }}>{component}</View>}
      {cords.slot_type === 'VIDEO' ? (
        <View style={[styles.videoContainer, { width, height }]}>
          {activeSlot !== null ? (
            <Video source={imageSource} style={[styles.video]} repeat resizeMode="cover" muted/>
          ) : (
            <Image source={VideoIcon} style={{ ...styles.photo, width, height }} />
          )}
        </View>
      ) : cords.slot_type === 'AUDIO' ? (
        <View style={[styles.videoContainer, { width, height }]}>
          {activeSlot !== null ? (
            <>
              <Image source={AudioIcon} style={{ ...styles.photo, width, height }} />

              {musicPlaying && (
                <Video source={imageSource} controls style={{ width: 0, height: 0 }} />
              )}
            </>
          ) : (
            <Image source={AudioIcon} style={{ ...styles.photo, width, height }} />
          )}
        </View>
      ) : url ? (
        <Image source={imageSource} style={{ ...styles.photo, width, height }} />
      ) : (
        editTree && (
          <TouchableOpacity
            onPressIn={() => {
              handleOpenSlotWindow && handleOpenSlotWindow();
            }}
          >
            <PlusWithCircle />
          </TouchableOpacity>
        )
      )}
      {isSlotIncludeAlbum && <Text style={textStyle}>{isSlotIncludeAlbum}</Text>}
    </TouchableOpacity>
  );
};

export default GlowingSlot;
