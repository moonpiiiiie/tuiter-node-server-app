import * as tuitsDao from "./tuits-dao.js";

const createTuit = async (req, res) => {
    const newTuit = req.body;
    
    newTuit.likes = 0;
    newTuit.liked = false;
    const insertedTuit = await tuitsDao.createTuit(newTuit);
    res.json(insertedTuit);
}

const findAllTuits  = async (req, res) => {
    const tuits = await tuitsDao.findTuits();
    res.send(tuits)
}

const updateTuit = async (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updates = req.body;
    const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updates);
    res.json(status);
}

const deleteTuit = async (req, res) => {
  const tuitIdToDelete = req.params.tid;
  const status = await tuitsDao.deleteTuit(tuitIdToDelete);
  res.json(status);
    // const tuitId = req.params.tid;
    // const index = tuits.findIndex((tuit) => tuit._id === tuitId);
    // if (index === -1) {
    //   res.sendStatus(404);
    //   return;
    // }
    // tuits.splice(index, 1);
    // res.sendStatus(200);
}

export default (app) => {
 app.post('/api/tuits', createTuit);
 app.get('/api/tuits', findAllTuits);
 app.put('/api/tuits/:tid', updateTuit);
 app.delete('/api/tuits/:tid', deleteTuit);
}
