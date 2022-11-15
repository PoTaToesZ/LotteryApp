import { View, Text } from 'react-native'
import React from 'react'
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {TDButtonPrimary, TDButtonSecondary, TDDividerWithTitle, TDTextInputAccount, TDTextSearch,TDHeader} from '@app/components';
import {useNavigation} from '@react-navigation/native';

const CalendarScreen = () => {
  const navigation= useNavigation()
  const customStyle = {
    eventIndicatorFiller: {
      backgroundColor: 'blue',
      width: 10,
      height: 10,
    },
  }
  return (
    <View style={{backgroundColor: '#CDFCF6', flex: 1}}>
       <TDHeader
        title={'Calendar'}
        leftComponentOnPress={() => {
          navigation.goBack();
        }}
      />
      <Calendar
  currentMonth={'2015-08-01'}       // Optional date to set the currently displayed month after initialization
  customStyle={{day: {fontSize: 15, textAlign: 'center'},eventIndicatorFiller: {
    backgroundColor: 'blue',
    width: 10,
    height: 10,
  }}} // Customize any pre-defined styles
  dayHeadings={Array}               // Default: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
  eventDates={['2022-11-16']}       // Optional array of moment() parseable dates that will show an event indicator
  events={[{date:'2015-07-01'}]}// Optional array of event objects with a date property and custom styles for the event indicator
  monthNames={Array}                // Defaults to english names of months
  nextButtonText={'Next'}           // Text for next button. Default: 'Next'
  onDateSelect={(date) => this.onDateSelect(date)} // Callback after date selection
  onDateLongPress={(date) => this.onDateLongPress(date)} // Callback after date is long pressed
  onSwipeNext={this.onSwipeNext}    // Callback for forward swipe event
  onSwipePrev={this.onSwipePrev}    // Callback for back swipe event
  onTouchNext={this.onTouchNext}    // Callback for next touch event
  onTouchPrev={this.onTouchPrev}    // Callback for prev touch event
  onTitlePress={this.onTitlePress}  // Callback on title press
  prevButtonText={'Prev'}           // Text for previous button. Default: 'Prev'
  removeClippedSubviews={false}     // Set to false for us within Modals. Default: true
  renderDay={{}}         // Optionally render a custom day component
  scrollEnabled={true}              // False disables swiping. Default: False
  selectedDate={'2015-08-15'}       // Day to be selected
  showControls={true}               // False hides prev/next buttons. Default: False
  showEventIndicators={true}        // False hides event indicators. Default:False
  startDate={'2015-08-01'}          // The first month that will display. Default: current month
  titleFormat={'MMMM YYYY'}         // Format for displaying current month. Default: 'MMMM YYYY'
  today={'2017-05-16'}              // Defaults to today
  weekStart={1} // Day on which week starts 0 - Sunday, 1 - Monday, 2 - Tuesday, etc, Default: 1
/>

    </View>
  )
}

export default CalendarScreen