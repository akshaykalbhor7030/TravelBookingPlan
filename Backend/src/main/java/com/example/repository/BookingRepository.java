package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.model.Booking;

import java.util.List;

public interface BookingRepository extends JpaRepository<Booking, Long> {
    List<Booking> findByUserUserId(Long userId);
}
