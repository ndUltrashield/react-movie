import {Client, Databases} from 'appwrite'

const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;
const ENDPOINT = import.meta.env.VITE_APPWRITE_ENDPOINT;

// const client = new Client().setEndpoint(ENDPOINT).setProject(PROJECT_ID)
// const database = new Databases(client)

export const updateSearchCount = async()=>{
    console.log(PROJECT_ID, DATABASE_ID, COLLECTION_ID, ENDPOINT);

}