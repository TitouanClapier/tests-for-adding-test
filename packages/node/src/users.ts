import { Router, Request, Response } from 'express';
import {
  getUsers,
  createUser,
  getUserById,
  updateUserName
} from './usersStore';

const router = Router();

/**
 * GET /users
 * → Retourne la liste des utilisateurs
 */
router.get('/', (_req: Request, res: Response): void => {
  const users = getUsers();
  res.status(200).json(users);
});

/**
 * POST /users
 * Body attendu : { name: string }
 * → Crée un nouvel utilisateur
 */
router.post('/', (req: Request, res: Response): void => {
  const { name } = req.body;

  if (typeof name !== 'string' || name.trim() === '') {
    res.status(400).json({ error: 'name is required' });
    return;
  }

  const user = createUser(name.trim());
  res.status(201).json(user);
});

/**
 * GET /users/:id
 * → Retourne un utilisateur par son ID
 */
router.get('/:id', (req: Request, res: Response): void => {
  const id = Number(req.params.id);
  const user = getUserById(id);

  if (!user) {
    res.status(404).json({ error: 'User not found' });
    return;
  }

  res.status(200).json(user);
});

/**
 * PUT /users/:id
 * Body attendu : { name: string }
 * → Met à jour le nom d’un utilisateur
 */
router.put('/:id', (req: Request, res: Response): void => {
  const id = Number(req.params.id);
  const { name } = req.body;

  if (typeof name !== 'string' || name.trim() === '') {
    res.status(400).json({ error: 'name is required' });
    return;
  }

  const updated = updateUserName(id, name.trim());

  if (!updated) {
    res.status(404).json({ error: 'User not found' });
    return;
  }

  res.status(200).json(updated);
});

export default router;
