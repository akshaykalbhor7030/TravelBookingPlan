package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.model.Package;

public interface PackageRepository extends JpaRepository<Package, Long> {
}
