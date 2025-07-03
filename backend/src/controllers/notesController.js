export function getAllNotes (req, res) {
    res.status(200).send("Jou just fetched some notes!");
}

export function createNote (req, res) {
    res.status(201).send("Jou just created a note!");
}
export function updateNote (req, res) {
    res.status(200).send("Jou just updated a note!");
}
export function deleteNote (req, res) {
    res.status(200).send("Jou just deleted a note!");
}