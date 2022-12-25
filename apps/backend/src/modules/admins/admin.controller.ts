import { Body, Controller, Get, HttpCode, HttpStatus, Post, Res, UseGuards } from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from '@nestjs/swagger';
import { AdminService } from './admin.service';
import { AdminRegisterDto } from './admin.dto';
import { Response } from 'express';
import { JwtGuard } from '../../auth/jwt-guard';

@ApiTags('admin')
@Controller('admin')
export class AdminController {
    constructor(private readonly adminService: AdminService) {}

    @HttpCode(HttpStatus.OK)
    @ApiResponse({
        status: 200,
    })
    @ApiOperation({
        operationId: 'login user',
        summary: 'login user'
    })
    @Post('login')
    async login(@Body() registerDto: AdminRegisterDto, @Res() res: Response) {
        const result = await this.adminService.login(registerDto);
        res.cookie('x-access-token', result.token, {
            httpOnly: true,
        });

        return res.send(result);
    }

    @UseGuards(JwtGuard)
    @HttpCode(HttpStatus.OK)
    @ApiOperation({
        operationId: 'checkAuthorization',
        summary: 'check authorization'
    })
    @Get('auth')
    async checkAuth() {
      return { success: true }
    }
}
