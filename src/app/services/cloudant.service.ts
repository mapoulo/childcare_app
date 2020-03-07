import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

const CLOUDANT_URL = "https://e405c58e-1792-469b-9ef2-d2ff0778e7d9-bluemix:b2264f1077989dce3b2a2b549e2f877c7366df47a7e248b7d393edd1826be8c7@e405c58e-1792-469b-9ef2-d2ff0778e7d9-bluemix.cloudantnosqldb.appdomain.cloud"
const CLOUDANT_USERNAME = "e405c58e-1792-469b-9ef2-d2ff0778e7d9-bluemix"
const CLOUDANT_PASSWORD = "b2264f1077989dce3b2a2b549e2f877c7366df47a7e248b7d393edd1826be8c7"
const BASIC_AUTH = 'Basic ' + btoa(CLOUDANT_USERNAME + ':' + CLOUDANT_PASSWORD);
@Injectable({
  providedIn: 'root'
})
export class CloudantService {


  constructor(private http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': BASIC_AUTH
    })
  };
  createDB(db: string): Observable<{}> {
    const url = `${CLOUDANT_URL}/${db}`
    return this.http.put(url, '' , this.httpOptions)
  }

  /**
   * Create a new document in the cloudant db
   * @param db database name
   * @param docId document id
   * @param doc document to create
   */
  createDoc(db: string, doc: string): Observable<{}> {
    const url = `${CLOUDANT_URL}/${db}`;
    return this.http.post<{}>(url, doc, this.httpOptions)
  }

  /**
   * Get a document docId from the cloudant db
   * @param db database name
   * @param docId document id
   */
  getDoc(db: string, docId: string): Observable<{}>  {
    const url = `${CLOUDANT_URL}/${db}/${docId}`;
    return this.http.get<{}>(url, this.httpOptions)

  }

  /**
   * Update a document in the cloudant db. The updated doc must contain the id and the old document's revision
   * @param db database name
   * @param docId document id
   * @param doc document to update
   */
  updateDoc(db: string, docId: string, doc: string): Observable<{}> {
    const url = `${CLOUDANT_URL}/${db}/${docId}`;
    return this.http.post<{}>(url, doc, this.httpOptions)
  }

  /**
   * Delete a document in the cloudant db.
   * @param db  database name
   * @param docId document id
   */
  deleteDoc(db: string, docId: string): Observable<{}> {
    const url = `${CLOUDANT_URL}/${db}/${docId}`;
    return this.http.delete<{}>(url, this.httpOptions)
  }
}
