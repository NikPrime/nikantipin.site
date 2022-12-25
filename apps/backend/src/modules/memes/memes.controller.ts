import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { MemesService } from './memes.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateMemeDto } from './dto/create-meme.dto';
import { PaginationQueryDto } from "../../common/base.dto";

@ApiTags('memes')
@Controller('memes')
export class MemesController {
  constructor(private readonly memesService: MemesService) {}

  @ApiOperation({
    operationId: 'create meme',
    summary: 'create meme'
  })
  @ApiResponse({
    status: 200,
  })
  @Post()
  async create(@Body() createMemeDto: CreateMemeDto) {
    return this.memesService.create(createMemeDto);
  }

  @ApiOperation({
    operationId: 'findAllMemes',
    summary: 'find all memes'
  })
  @ApiResponse({
    status: 200,
  })
  @Get()
  async findAll(@Query() pagination: PaginationQueryDto) {
    return this.memesService.findAll(pagination);
  }
}
