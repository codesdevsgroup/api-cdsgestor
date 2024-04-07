import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CertificatesService } from './certificates.service';
import { CreateCertificateDto } from './dto/create-certificate.dto';

@Controller('certificates')
export class CertificatesController {
  constructor(private readonly certificatesService: CertificatesService) { }
  @Get()
  findAll() {
    return this.certificatesService.findAll()
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.certificatesService.findOne(id)
  }
  @Get('cnpj-:cnpj')
  findByCnpj(@Param('cnpj') cnpj: string) {
    return this.certificatesService.findByCnpj(cnpj);
  }
  @Post()
  create(@Body() createCertificateDto: CreateCertificateDto) {
    return this.certificatesService.create(createCertificateDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCertificateDto: CreateCertificateDto) {
    return this.certificatesService.update(id, updateCertificateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.certificatesService.remove(id);
  }
}
