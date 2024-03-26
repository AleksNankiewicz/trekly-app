import * as SQlite from 'expo-sqlite'
import { placeProps } from './types/place'

const database = SQlite.openDatabase('places.db')

export const init = () => {
  return new Promise<void>((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY NOT NULL,
            title TEXT NOT NULL,
            imageUri TEXT NOT NULL,
            address TEXT NOT NULL,
            lat REAL NOT NULL,
            lng REAL NOT NULL
          )`,
        [],
        () => {
          // console.log('Table creation successful')
          resolve()
        },
        (_, error) => {
          console.error('Error while creating table:', error)
          reject(error)
          return true
        }
      )
    })
  })
}

export const insertPlaces = (place: placeProps) => {
  return new Promise<void>((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO places (title, imageUri, address, lat, lng) VALUES (?, ?, ?, ?, ?)`,
        [
          place.title,
          place.imageUri,
          place.location.address,
          place.location.lat,
          place.location.lng,
        ],
        (_, resultSet) => {
          // Assuming the result is successful, we can just resolve without passing the result
          console.log('Insertion successful:', resultSet)
          resolve()
        },
        (_, error) => {
          console.error('Error while inserting:', error)
          reject(error)
          return true
        }
      )
    })
  })
}

export const fetchPlaces = () => {
  const promise = new Promise<placeProps[]>((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM places',
        [],
        (_, result) => {
          const places: placeProps[] = []

          for (const dp of result.rows._array) {
            places.push({
              title: dp.title,
              imageUri: dp.imageUri,
              location: { lat: dp.lat, lng: dp.lng },
              address: dp.address,
              id: dp.id,
            })
          }

          resolve(places)
        },
        (_, error) => {
          reject(error)
          return true
        }
      )
    })
  })
  return promise
}
