package com.amol.E_CommerceWebBackend.controller;

import com.amol.E_CommerceWebBackend.entity.Product;
import com.amol.E_CommerceWebBackend.request.SaveProductRequest;
import com.amol.E_CommerceWebBackend.service.ProductService;
import org.apache.tomcat.util.http.fileupload.FileUpload;
import org.apache.tomcat.util.http.fileupload.impl.IOFileUploadException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Optional;

@RestController
@RequestMapping("/product")
public class ProductController {
//    @Autowired
//    Product product;
    @Autowired
    ProductService productService;

    @PostMapping(
            value = "/add-product",
            consumes = MediaType.MULTIPART_FORM_DATA_VALUE
    )
    public ResponseEntity<Product> saveProduct (@RequestPart("request") SaveProductRequest request,
                                                @RequestPart("image") MultipartFile image) throws IOException {
       /*Optional<Product> optProduct= productService.saveProduct(request, image);
       if (optProduct.isPresent()){
           return new ResponseEntity<>(optProduct.get(), HttpStatus.CREATED);
       }else {
           return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
       }*/
        return productService.saveProduct(request, image)
                .map(product -> new ResponseEntity<>(product, HttpStatus.CREATED))
                .orElse(new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED));
    }

    @GetMapping("/list")
    public ResponseEntity<Page<Product>> getProducts(@RequestParam(defaultValue = "0") int page,
                                     @RequestParam(defaultValue = "10") int size){

       Page<Product> products= productService.getProducts(page, size);
        if(products != null){
            return  new ResponseEntity<>(products, HttpStatus.OK);
        }else {
            return new ResponseEntity<>(null , HttpStatus.EXPECTATION_FAILED);
        }


    }
}
