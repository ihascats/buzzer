import Icon from '@mdi/react';
import {
  mdiAccountOutline,
  mdiArchive,
  mdiBee,
  mdiBellOutline,
  mdiBookmarkOutline,
  mdiCalendarClockOutline,
  mdiDotsHorizontal,
  mdiDotsHorizontalCircleOutline,
  mdiEmailOutline,
  mdiEmoticonHappyOutline,
  mdiFileGifBox,
  mdiImageOutline,
  mdiMagnify,
  mdiMapMarkerOutline,
  mdiPoll,
  mdiPound,
  mdiWindowClose,
} from '@mdi/js';

export default function Icons() {
  const hashtag = (
    <Icon
      path={mdiPound}
      title=""
      size={1}
      horizontal
      vertical
      rotate={180}
      color="rgb(247, 249, 249)"
    />
  );
  const home = (
    <Icon
      path={mdiArchive}
      title=""
      size={1}
      horizontal
      vertical
      rotate={180}
      color="rgb(247, 249, 249)"
    />
  );
  const bell = (
    <Icon
      path={mdiBellOutline}
      title=""
      size={1}
      horizontal
      vertical
      rotate={180}
      color="rgb(247, 249, 249)"
    />
  );
  const mail = (
    <Icon
      path={mdiEmailOutline}
      title=""
      size={1}
      horizontal
      vertical
      rotate={180}
      color="rgb(247, 249, 249)"
    />
  );
  const bookmark = (
    <Icon
      path={mdiBookmarkOutline}
      title=""
      size={1}
      horizontal
      vertical
      rotate={180}
      color="rgb(247, 249, 249)"
    />
  );
  const account = (
    <Icon
      path={mdiAccountOutline}
      title=""
      size={1}
      horizontal
      vertical
      rotate={180}
      color="rgb(247, 249, 249)"
    />
  );
  const more = (
    <Icon
      path={mdiDotsHorizontalCircleOutline}
      title=""
      size={1}
      horizontal
      vertical
      rotate={180}
      color="rgb(247, 249, 249)"
    />
  );
  const bee = (
    <Icon
      path={mdiBee}
      title=""
      size={2}
      horizontal
      vertical
      rotate={180}
      color="rgb(247, 249, 249)"
    />
  );
  const threeDots = (
    <Icon
      path={mdiDotsHorizontal}
      title=""
      size={1}
      horizontal
      vertical
      rotate={180}
      color="rgb(247, 249, 249)"
    />
  );

  const search = (
    <Icon
      path={mdiMagnify}
      title=""
      size={1}
      horizontal
      vertical
      rotate={180}
      color="inherit"
    />
  );

  const attachImage = (
    <Icon
      path={mdiImageOutline}
      title=""
      // size={1}
      horizontal
      vertical
      rotate={180}
      color="inherit"
    />
  );

  const attachGif = (
    <Icon
      path={mdiFileGifBox}
      title=""
      // size={1}
      horizontal
      vertical
      rotate={180}
      color="inherit"
    />
  );

  const poll = (
    <Icon
      path={mdiPoll}
      title=""
      // size={1}
      horizontal
      vertical
      rotate={270}
      color="inherit"
    />
  );

  const attachEmoji = (
    <Icon
      path={mdiEmoticonHappyOutline}
      title=""
      // size={1}
      horizontal
      vertical
      rotate={180}
      color="inherit"
    />
  );

  const attachSchedule = (
    <Icon
      path={mdiCalendarClockOutline}
      title=""
      // size={1}
      horizontal
      vertical
      rotate={180}
      color="inherit"
    />
  );

  const attachLocation = (
    <Icon
      path={mdiMapMarkerOutline}
      title=""
      // size={1}
      horizontal
      vertical
      rotate={180}
      color="inherit"
    />
  );

  const close = (
    <Icon
      path={mdiWindowClose}
      title=""
      // size={1}
      horizontal
      vertical
      rotate={180}
      color="inherit"
    />
  );

  const iconPack = {
    home,
    hashtag,
    bell,
    mail,
    bookmark,
    account,
    more,
    bee,
    threeDots,
    search,
    attachImage,
    attachGif,
    poll,
    attachEmoji,
    attachSchedule,
    attachLocation,
    close,
  };

  return iconPack;
}
