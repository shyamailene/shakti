package com.shakti.repository;

import com.shakti.domain.Contactus;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Contactus entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ContactusRepository extends JpaRepository<Contactus, Long> {

}
