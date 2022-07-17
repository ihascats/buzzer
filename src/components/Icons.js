import Icon from '@mdi/react';
import {
  mdiAccountOutline,
  mdiArchive,
  mdiBee,
  mdiBellOutline,
  mdiBookmarkOutline,
  mdiDotsHorizontalCircleOutline,
  mdiEmailOutline,
  mdiPound,
} from '@mdi/js';

export default function Icons() {
  const hashtag = (
    <Icon
      path={mdiPound}
      title="User Profile"
      size={1}
      horizontal
      vertical
      rotate={180}
      color="inherit"
    />
  );
  const home = (
    <Icon
      path={mdiArchive}
      title="User Profile"
      size={1}
      horizontal
      vertical
      rotate={180}
      color="inherit"
    />
  );
  const bell = (
    <Icon
      path={mdiBellOutline}
      title="User Profile"
      size={1}
      horizontal
      vertical
      rotate={180}
      color="inherit"
    />
  );
  const mail = (
    <Icon
      path={mdiEmailOutline}
      title="User Profile"
      size={1}
      horizontal
      vertical
      rotate={180}
      color="inherit"
    />
  );
  const bookmark = (
    <Icon
      path={mdiBookmarkOutline}
      title="User Profile"
      size={1}
      horizontal
      vertical
      rotate={180}
      color="inherit"
    />
  );
  const account = (
    <Icon
      path={mdiAccountOutline}
      title="User Profile"
      size={1}
      horizontal
      vertical
      rotate={180}
      color="inherit"
    />
  );
  const more = (
    <Icon
      path={mdiDotsHorizontalCircleOutline}
      title="User Profile"
      size={1}
      horizontal
      vertical
      rotate={180}
      color="inherit"
    />
  );
  const bee = (
    <Icon
      path={mdiBee}
      title="User Profile"
      size={2}
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
  };

  return iconPack;
}
