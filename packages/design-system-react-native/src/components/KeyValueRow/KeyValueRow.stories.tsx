import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Button, ButtonVariant } from '../Button';
import { IconColor, IconName, IconSize } from '../Icon';
import { Text, TextColor, TextVariant } from '../Text';

import KeyValueRowComponent, {
  KeyValueRowFieldIconSides,
  TooltipSizes,
} from '.';

const KeyValueRowMeta = {
  title: 'Components/KeyValueRow',
  component: KeyValueRowComponent,
};

export default KeyValueRowMeta;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  listItem: {
    marginVertical: 16,
    gap: 16,
  },
});

export const KeyValueRow = {
  render: () => (
    <View style={styles.container}>
      <Text variant={TextVariant.HeadingMd}>KeyValueRow Component</Text>
      <Text variant={TextVariant.BodySm}>
        Prebuilt component displayed below but KeyValueRow stubs are available
        to create new KeyValueRow variants.
      </Text>
      <View style={styles.listItem}>
        <KeyValueRowComponent
          field={{
            label: {
              text: 'Sample Key Text',
            },
          }}
          value={{ label: { text: 'Sample Value Text' } }}
        />
        <KeyValueRowComponent
          field={{
            label: {
              text: 'Sample Key Text',
              variant: TextVariant.BodySm,
              color: TextColor.TextAlternative,
            },
          }}
          value={{
            label: {
              text: 'Sample Value Text',
              variant: TextVariant.BodySm,
              color: TextColor.SuccessDefault,
            },
            tooltip: {
              title: 'Sample Title',
              content:
                'Pariatur nisi pariatur ex veniam ad. Non tempor nostrud sint velit cupidatat aliquip elit ut pariatur reprehenderit enim enim commodo eu.',
              size: TooltipSizes.Sm,
            },
          }}
        />
        <KeyValueRowComponent
          field={{
            label: {
              text: 'Sample Key Text',
            },
            tooltip: {
              title: 'Sample Tooltip',
              content:
                'Pariatur nisi pariatur ex veniam ad. Non tempor nostrud sint velit cupidatat aliquip elit ut pariatur reprehenderit enim enim commodo eu.',
            },
          }}
          value={{
            label: {
              text: 'Sample Value Text',
            },
          }}
        />
        <KeyValueRowComponent
          field={{
            label: {
              text: 'Sample Key Text',
            },
            icon: {
              name: IconName.Wifi,
              color: IconColor.PrimaryDefault,
              size: IconSize.Sm,
              side: KeyValueRowFieldIconSides.Both,
            },
          }}
          value={{
            label: {
              text: 'Sample Value Text',
            },
            icon: {
              name: IconName.Wifi,
              color: IconColor.PrimaryDefault,
              size: IconSize.Sm,
              side: KeyValueRowFieldIconSides.Both,
            },
          }}
        />
        {/* Using Custom ReactNode */}
        <KeyValueRowComponent
          field={{
            label: { text: 'Sample Key' },
            icon: {
              name: IconName.UserCircleAdd,
              color: IconColor.PrimaryDefault,
            },
            tooltip: {
              title: 'Sample Tooltip',
              content:
                'Pariatur nisi pariatur ex veniam ad. Non tempor nostrud sint velit cupidatat aliquip elit ut pariatur reprehenderit enim enim commodo eu.',
            },
          }}
          value={{
            label: (
              <Button
                variant={ButtonVariant.Primary}
                label="Sample button"
                // eslint-disable-next-line no-alert
                onPress={() => alert('test')}
              />
            ),
          }}
        />
      </View>
    </View>
  ),
};
