export const getEventState = () => {
  console.log('mon selecteur');

  const dateStart = moment(state.eventDetails.data.date_start).format('DD MMM YYYY');
  const dateEnd = moment(state.eventDetails.data.date_end).format('DD MMM YYYY');
  const now = moment().format('DD MMM YYYY');
  let eventState = 'A venir';

  if (moment(dateStart).isBefore(now) && moment(dateEnd).isAfter(now)) {
    console.log('evenement en cours');
    return eventState = 'En cours';
  }
  if (moment(now).isAfter(dateEnd)) {
    console.log('evenement terminé');
    return eventState = 'Terminé';
  } 
  return eventState
}