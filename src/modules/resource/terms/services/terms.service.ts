import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTermDto, UpdateTermDto } from '../dtos/index';
import { TermsEntity } from '../entities/terms.entity';

@Injectable()
export class TermsService {
  @InjectRepository(TermsEntity)
  private readonly termsRepository: Repository<TermsEntity>
  
  async findOneTermById(id: number) {
    try {
      const term = await this.termsRepository.findOne(id);
      if (!term) {
        throw new HttpException('Term not found', HttpStatus.NOT_FOUND);
      }
      return term;
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }


  async getAllTerms(projectId: number) {
    const result = await this.termsRepository.find({
      where: {
        projectId,
      }
    })
    return result
  }

  async createTerm(projectId: number, createTermDto: CreateTermDto) {
    try {
      const term = await this.termsRepository.create({
        ...createTermDto,
        projectId:1
      });
      await this.termsRepository.save(term);
      return term;
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async updateTerm(id: number, updateTermDto: UpdateTermDto) {
    try {
      await this.findOneTermById(id);
      console.log(333);
      
      const term = await this.termsRepository.save({
        ...updateTermDto,
        id
      });
      console.log(term);
      
      return term;
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }



  async removeTerm(id: number) {
    try {
      await this.findOneTermById(id)
      await this.termsRepository.delete(id)
      return {}
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
}
