import { Request, Response } from "express";
import Product from "../model/Product";

const productsControllers = {
  getAllProducts: async (req: Request, res: Response) => {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: "Error fetching products", error });
    }
  },
  getProductById: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const product = await Product.findById(id);
      if (!product) {
        res.status(404).json({ message: "Product not found" });
      }
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ message: "Error fetching product", error });
    }
  },

  getProductByCategory: async (req: Request, res: Response) => {
    const { category } = req.query;
    try {
      let query = {};
      if (category === "all") {
      } else if (category === "sales") {
        query = { discount: { $gt: 0 } };
      } else if (category) {
        query = { category: { $regex: new RegExp(category as string, "i") } };
      }
      const products = await Product.find(query);
      res.json(products);
    } catch (error) {
      console.error("Error fetching products:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  createProduct: async (req: Request, res: Response) => {
    try {
      const { name, description, price, images, category, stock, discount, isAvailable, color, type, material, countryOfOrigin } = req.body;

      const newProduct = new Product({
        name,
        description,
        price,
        images,
        category,
        stock,
        discount,
        isAvailable,
        color,
        type,
        material,
        countryOfOrigin
      });

      const savedProduct = await newProduct.save();
      res.status(201).json(savedProduct);
    } catch (error) {
      res.status(500).json({ message: "Error creating product", error });
    }
  },

  editProductById: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
        new: true
      });
      if (!updatedProduct) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.status(200).json(updatedProduct);
    } catch (error) {
      res.status(500).json({ message: "Error updating product", error });
    }
  },

  deleteProductById: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const deletedProduct = await Product.findByIdAndDelete(id);
      if (!deletedProduct) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting product", error });
    }
  }
};

export default productsControllers;
