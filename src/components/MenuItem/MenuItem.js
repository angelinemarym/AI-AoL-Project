import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './MenuItem.styles';
import GlobalStyles from '../../utils/styles/GlobalStyles';
import {fontWeight} from '../../utils/text';
import {IconStar} from '../../assets/icons';
import colors from '../../utils/colors';

const MenuItem = ({name, price, rating, image, discount}) => {
  return (
    <>
      <View style={styles.gap} />
      <View style={styles.wrapper}>
        <Image source={image} style={styles.image} />
        {discount && (
          <View style={styles.discWrapper}>
            <Text style={[GlobalStyles.bodyText, {color: colors.white}]}>
              {discount}
            </Text>
          </View>
        )}
        <View style={styles.descWrapper}>
          <Text style={[GlobalStyles.bodyText, {fontWeight: fontWeight.bold}]}>
            {name}
          </Text>
          <View
            style={[
              GlobalStyles.horizontalCenter,
              {justifyContent: 'space-between'},
            ]}>
            <Text style={GlobalStyles.bodyText}>LKR {price}</Text>
            <View style={GlobalStyles.horizontalCenter}>
              <IconStar />
              <Text style={[GlobalStyles.bodyText, {marginLeft: 5}]}>
                {rating}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default MenuItem;
