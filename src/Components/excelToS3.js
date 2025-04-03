// excelToS3.js
import axios from 'axios';

export const getPresignedUrl = async (assortmentLead, supplier, fileName) => {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const fileExtension = fileName.split('.').pop();
  const fileNameWithoutExtension = fileName.replace(`.${fileExtension}`, '');
  const uniqueFileName = `${fileNameWithoutExtension}-${timestamp}.${fileExtension}`;

  const sanitizeFolderName = (name) => name.replace(/[^a-zA-Z0-9-_]/g, '_');
  const sanitizedAssortmentLead = sanitizeFolderName(assortmentLead);
  const sanitizedSupplier = sanitizeFolderName(supplier);

  const s3Key = `supplier-excels/${sanitizedAssortmentLead}/${sanitizedSupplier}/${uniqueFileName}`;

  try {
    const response = await axios.post(
      'https://wkc1v97yof.execute-api.eu-north-1.amazonaws.com/default/generate-presigned-url',
      {
        bucket: 'opil-converter-tool-artifacts',
        key: s3Key,
        contentType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // Excel MIME
      }
    );
    return response.data.url; //
  } catch (error) {
    console.error('Error fetching presigned URL:', error);
    throw error;
  }
};

export const uploadExcelToS3 = async (file, presignedUrl) => {
  try {
    const response = await axios.put(presignedUrl, file, {
      headers: {
        'Content-Type': file.type,
      },
    });
    console.log('Excel file uploaded successfully:', response);
  } catch (error) {
    console.error('Error uploading file to S3:', error);
    throw error;
  }
};