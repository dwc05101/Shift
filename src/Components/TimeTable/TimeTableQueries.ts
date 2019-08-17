import gql from "graphql-tag"

export const GET_TIMETABLE = gql`
  query GetCurrentTimeTable(
    $yearMonthWeek: String
    $organizationId: Int
    $timetableId: Int
  ) {
    GetCurrentTimeTable(
      yearMonthWeek: $yearMonthWeek
      organizationId: $organizationId
      timetableId: $timetableId
    ) {
      ok
      error
      timetable {
        yearMonthWeek
        id
        isConfirmed
        organization {
          name
          users {
            name
            personalCode
          }
        }
        links {
          url
        }
        days {
          id
          isEndTimeNextDay
          startTime
          endTime
          dayNumber
          isEndTimeNextDay
          slots {
            id
            userId
            isSelected
            isFulltime
            startTime
            endTime
            isStartTimeNextDay
            isEndTimeNextDay
            user {
              name
              personalCode
            }
          }
        }
      }
    }
  }
`

export const CREATE_LINK = gql`
  mutation CreateLink($timetableId: Int!) {
    CreateLink(timetableId: $timetableId) {
      ok
      error
      link {
        url
      }
    }
  }
`
