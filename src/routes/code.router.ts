import { Router } from 'express';
import CodeController from '@controllers/code.controller';
import { Routes } from '@interfaces/routes.interface';

class CodeRoute implements Routes {
  public path = '/';
  public router = Router();
  public codeController = new CodeController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.codeController.index);
    this.router.get(`${this.path}new`, this.codeController.newPaste);
  }
}

export default CodeRoute;
