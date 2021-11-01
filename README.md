# BackendPlaylist

# 1.1 Get Playlists
This endpoint is used for show all playlists available.
- endpoint: playlists/Playlists
- method: GET
- validations: None
- errors:

| Code  | Message | Http |
| ------------- |-------------|-------------|
|TimeOutException|Server down|500|

- response: HTTP STATUS 200






# 1.2 Add Playlists
This endpoint is used for add a playlist.
- endpoint: playlists/agregarPlaylists
- method: POST
- body: 

```json
{
    "titulo": "Talking to the Moon",
    "descripcion" : "Tik Tok song for sad memes"
}
```
- validations:

| Field  | Validation |
| ------------- |-------------|
| titulo|Must be a string between 5 and 50 chars.|
| descripcion|Must be a string between 10 and 250 chars.|

- errors:

| Code  | Message | Http |
| ------------- |-------------|-------------|
|InvalidBodyException|operacion: Error|400|
|InvalidBodyException|La descripcion debe tener de 10 a 250 chars y el titulo debe tener de 5 a 50 chars|422|

- response: Realizada correctamente. HTTP STATUS 200.






# 1.3 Update Playlists
This endpoint is used for add a playlist.
- endpoint: playlists/actualizarPlaylists
- method: POST
- body: 

```json
{
  "filtro":{
    "titulo": "Talking to the Moon"
  },
  "cambio": {
    "titulo": "Talking to the Moon"
    "descripcion" : "Cambio de descripcion"
    }
}
```
- validations:

| Field  | Validation |
| ------------- |-------------|
| cambio|Must have both fields titulo y descripcion|
| titulo|Must be a string between 5 and 50 chars.|
| descripcion|Must be a string between 10 and 250 chars.|

- errors:

| Code  | Message | Http |
| ------------- |-------------|-------------|
|InvalidBodyException|operacion: Error|400|
|InvalidBodyException|La descripcion debe tener de 10 a 250 chars y el titulo debe tener de 5 a 50 chars|422|
|InvalidBodyException|Hay un error en los datos. Debes de mandar un Json con un Json Filtro y Un Json con el cambio.|422|

- response: Realizada correctamente. HTTP STATUS 200.






# 1.4 Delete Playlists
This endpoint is used for add a playlist.
- endpoint: playlists/borrarPlaylists
- method: POST
- body: 

```json
{
  "_id": "617eeddfa5050308357cdfea"
}
```
- validations:

| Field  | Validation |
| ------------- |-------------|
| _id|Must be a valid id|

- errors:

| Code  | Message | Http |
| ------------- |-------------|-------------|
|InvalidBodyException|operacion: Error|400|

- response: Realizada correctamente. HTTP STATUS 200.
