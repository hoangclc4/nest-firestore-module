import { TodoDocument } from '../todos/documents/todo.document';

export const FirestoreDatabaseProvider = 'firestoredb';
export const FirestoreOptionsProvider = 'firestoreOptions';
export const FirestoreCollectionProviders: string[] = [
  TodoDocument.collectionName,
];
