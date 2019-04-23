package com.shakti.repository;

import com.shakti.domain.Fundraiser;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Fundraiser entity.
 */
@SuppressWarnings("unused")
@Repository
public interface FundraiserRepository extends JpaRepository<Fundraiser, Long> {

}
